const streetAddressEl = document.querySelector('[itemprop="streetAddress"]');
const streetAddress = streetAddressEl.innerText
console.log(streetAddress);

GetPageModel();


function GetPageModel(){
    // get the documents scripts and find page model
    const scripts = document.scripts;
    const pageModelDeclaration = `window.PAGE_MODEL = `;

    for (let script of scripts) {
        const scriptText = script.innerText.trimStart();
        if(scriptText.startsWith(pageModelDeclaration)){
            console.log(script);
            const pageModelJsonStr = scriptText.replace(pageModelDeclaration, ``);
            const pageModel = JSON.parse(pageModelJsonStr);

            const address = pageModel.propertyData.address;
            const postcode = `${address.outcode}${address.incode}`
            console.log(postcode)

            chrome.runtime.sendMessage(postcode, (response) => {
                console.log(response.result);
            });
            break;    
        }
    }
}