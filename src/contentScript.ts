import { RestaurantResponse, RightMoveModel } from "./types";
import {
  InvalidAccordionTemplate,
  InvalidJustEatResponse,
  InvalidPageModel,
  InvalidRestaurantTemplate,
} from "./errorCodes";

import "./styles.scss";

const GetPageModel = function (): RightMoveModel | null {
  // get the documents scripts and find page model
  const scripts = document.scripts;
  const pageModelDeclaration = `window.PAGE_MODEL = `;
  const pageModelSecondDeclaration = `window.adInfo`;

  for (const script of scripts) {
    const scriptText = script.innerText.trimStart();

    if (!scriptText.startsWith(pageModelDeclaration)) {
      continue;
    }

    let pageModelJsonStr = scriptText
      .replace(pageModelDeclaration, ``)
      .split(pageModelSecondDeclaration)[0]
      .trimEnd();

    if (!pageModelJsonStr.endsWith("}")) {
      const lastClosedBracketIndex = pageModelJsonStr.lastIndexOf("}");
      const stringUntilLastClosedBracket = pageModelJsonStr.substring(
        0,
        lastClosedBracketIndex + 1
      );

      pageModelJsonStr = stringUntilLastClosedBracket;
    }

    try {
      const pageModel = JSON.parse(pageModelJsonStr);
      return pageModel;
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      return null;
    }
  }
  return null;
};

function BuildRestaurantsList(restaurantsResult: RestaurantResponse) {
  const { Area: area, Restaurants: restaurants } = restaurantsResult;
  const titleText = `JustEat in ${area}`;
  const template = document.createElement("template");
  template.innerHTML = `
      <details class="JustRight-Accordion">
        <summary>
          <span>${titleText}</span>
          <svg role="img">
            <use xlink:href="#chevron-line"></use>
          </svg>
        </summary>
      </details>`;
  const itemTemplate = document.createElement("template");
  itemTemplate.innerHTML = `
      <li>
        <a>
          <img />
          <span></span>
        </a>
      </li>`;

  const clone = <Element>template.content.cloneNode(true);
  const details = clone.querySelector("details");
  if (details === null) {
    throw InvalidAccordionTemplate;
  }
  const restaurantsContainer = document.createElement("ul");

  restaurants.forEach((restaurant) => {
    const item = <Element>itemTemplate.content.cloneNode(true);
    const link = item.querySelector("a");
    const image = item.querySelector("img");
    const text = item.querySelector("span");

    if (link === null || image === null || text === null) {
      throw InvalidRestaurantTemplate;
    }

    link.href = restaurant.Url;
    image.src = restaurant.LogoUrl;
    text.innerText = `${restaurant.Name} - ${restaurant.RatingStars} stars`;
    restaurantsContainer.appendChild(item);
  });

  details.appendChild(restaurantsContainer);
  return clone;
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function handleContentMatch() {
  const pageModel = GetPageModel();
  if (pageModel === null) {
    console.debug("JustRight: Unable to parse RightMove page model");
    throw InvalidPageModel;
  }

  const address = pageModel.propertyData.address;
  const postcode = `${address.outcode}${address.incode}`;

  const mortgageAffordabilityChecker = document.querySelector(
    `[data-gtm-name=mortgage-affordability-checker]`
  );
  const broadBandSpeed = document.querySelector(
    `button > div > svg[data-testid=svg-broadband]`
  )?.parentElement?.parentElement?.parentElement;

  chrome.runtime.sendMessage(
    postcode,
    (response: RestaurantResponse | string) => {
      if (response === null || isString(response)) {
        throw InvalidJustEatResponse;
      }

      const restaurantsList = BuildRestaurantsList(response);
      if (mortgageAffordabilityChecker !== null) {
        console.debug(
          "JustRight: Appending restaurants list after mortgage checker"
        );
        mortgageAffordabilityChecker.after(restaurantsList);
      } else if (broadBandSpeed) {
        console.debug(
          "JustRight: Appending restaurants list after broadband speed"
        );
        broadBandSpeed.before(restaurantsList);
      } else {
        console.debug("JustRight: Appending restaurants list to body");
        document.body.appendChild(restaurantsList);
      }
    }
  );
}

handleContentMatch();
