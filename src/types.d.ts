export interface RestaurantResponse {
  Area: string;
  MetaData: MetaData;
  Restaurants: Restaurant[];
  ShortResultText: string;
  deliveryFees: DeliveryFees;
  promotedPlacement: PromotedPlacement;
  RestaurantSets: Set[];
  CuisineSets: Set[];
  Views: View[];
  Dishes: any[];
}

export interface Set {
  Id: string;
  Name: null | string;
  Type: null | string;
  Cuisines?: Cuisine[];
  Restaurants?: CuisineSetRestaurant[];
}

export interface Cuisine {
  Name: string;
  SeoName: string;
}

export interface CuisineSetRestaurant {
  Id: number;
  Metadata: MetaData;
}

export interface MetaData {
  CanonicalName: string;
  District: string;
  Postcode: string;
  Area: string;
  Latitude: number;
  Longitude: number;
  CuisineDetails: CuisineDetail[];
  ResultCount: number;
  SearchedTerms: null;
  TagDetails: TagDetail[];
  CollectionExperimentInjectedRestaurantIds: null;
  DeliveryArea: string;
}

export interface CuisineDetail {
  Name: string;
  SeoName: string;
  Total: number;
}

export interface TagDetail {
  BackgroundColour: string;
  Colour: string;
  DisplayName: string;
  Key: string;
  Priority: number;
}

export interface Restaurant {
  Id: number;
  Name: string;
  UniqueName: string;
  Address: Address;
  City: string;
  Postcode: string;
  Latitude: number;
  Longitude: number;
  Rating: Rating;
  RatingStars: number;
  NumberOfRatings: number;
  RatingAverage: number;
  Description: string;
  Url: string;
  LogoUrl: string;
  IsTestRestaurant: boolean;
  IsHalal: boolean;
  IsNew: boolean;
  ReasonWhyTemporarilyOffline: string;
  DriveDistance: number;
  DriveInfoCalculated: boolean;
  IsCloseBy: boolean;
  OfferPercent: number;
  NewnessDate: Date;
  OpeningTime: Date;
  OpeningTimeUtc: null;
  OpeningTimeIso: Date;
  OpeningTimeLocal: Date;
  DeliveryOpeningTimeLocal: Date;
  DeliveryOpeningTime: Date | null;
  DeliveryOpeningTimeUtc: null;
  DeliveryStartTime: Date;
  DeliveryTime: null;
  DeliveryTimeMinutes: null;
  DeliveryWorkingTimeMinutes: number | null;
  DeliveryEtaMinutes: DeliveryEtaMinutes | null;
  IsCollection: boolean;
  IsDelivery: boolean;
  IsFreeDelivery: boolean;
  IsOpenNowForCollection: boolean;
  IsOpenNowForDelivery: boolean;
  IsOpenNowForPreorder: boolean;
  IsOpenNow: boolean;
  IsTemporarilyOffline: boolean;
  DeliveryMenuId: null;
  CollectionMenuId: null;
  DeliveryZipcode: null;
  DeliveryCost: number;
  MinimumDeliveryValue: number;
  SecondDateRanking: number;
  DefaultDisplayRank: number;
  SponsoredPosition: number;
  SecondDateRank: number;
  Score: number;
  IsTemporaryBoost: boolean;
  IsSponsored: boolean;
  IsPremier: boolean;
  HygieneRating: null;
  ShowSmiley: boolean;
  SmileyDate: null;
  SmileyElite: boolean;
  SmileyResult: null;
  SmileyUrl: null;
  SendsOnItsWayNotifications: boolean;
  BrandName: string;
  IsBrand: boolean;
  LastUpdated: Date;
  Deals: any[];
  Offers: any[];
  Logo: Logo[];
  Tags: Tag[];
  DeliveryChargeBands: any[];
  CuisineTypes: CuisineType[];
  Cuisines: Cuisine[];
  ScoreMetaData: ScoreMetaDatum[];
  Badges: any[];
  OpeningTimes: any[];
  ServiceableAreas: any[];
}

export interface Address {
  City: string;
  FirstLine: string;
  Postcode: string;
  Latitude: number;
  Longitude: number;
}

export interface CuisineType {
  Id: number;
  IsTopCuisine: boolean;
  Name: string;
  SeoName: string;
}

export interface DeliveryEtaMinutes {
  Approximate: null;
  RangeLower: number;
  RangeUpper: number;
}

export interface Logo {
  StandardResolutionURL: string;
}

export interface Rating {
  Count: number;
  Average: number;
  StarRating: number;
}

export interface ScoreMetaDatum {
  Key: Key;
  Value: string;
}

export enum Key {
  Distance = "Distance",
  ExpIsRDS = "ExpIsRds",
  SetName = "SetName",
}

export enum Tag {
  Collection = "collection",
  ExcludeFromOrderAction = "exclude-from-order-action",
  FiveStar = "five_star",
  FreeDelivery = "free-delivery",
  Halal = "halal",
  LocalLegends = "local-legends",
  LowDeliveryFee = "low-delivery-fee",
  New = "new",
  OpenNow = "open_now",
}

export interface View {
  Target: string;
  Components: Component[];
}

export interface Component {
  Type: string;
  Id: string;
  TrackingId: string;
  TemplateName: string;
  ViewData: ViewData;
}

export interface ViewData {
  Title: null | string;
  SubTitle: null;
  SeeAllSearchTarget: SeeAllSearchTarget | null;
  SeeAllFilterId: null | string;
  FocusedProperties: string[];
  Dishes: null;
}

export interface SeeAllSearchTarget {
  CuisineFilters: any[];
  SortOrder: string;
  Refinements: any[];
}

export interface DeliveryFees {
  restaurants: { [key: string]: Restaurant };
}

export interface Restaurant {
  restaurantId: string;
  minimumOrderValue: number;
  bands: Band[];
}

export interface Band {
  minimumAmount: number;
  fee: number;
}

export interface PromotedPlacement {
  filteredSearchPromotedLimit: number;
  rankedIds: number[];
  restaurants: Restaurant[];
}

export type RightMoveModel = {
  propertyData: PropertyData;
  metadata: Metadata;
  isAuthenticated: boolean;
  analyticsInfo: AnalyticsInfo;
};

export interface AnalyticsInfo {
  analyticsBranch: AnalyticsBranch;
  analyticsProperty: AnalyticsProperty;
}

export interface AnalyticsBranch {
  agentType: string;
  branchId: number;
  branchName: string;
  branchPostcode: null;
  brandName: string;
  companyName: string;
  companyTradingName: string;
  companyType: string;
  displayAddress: string;
  pageType: string;
}

export interface AnalyticsProperty {
  added: string;
  auctionOnly: boolean;
  beds: number;
  businessForSale: boolean;
  country: string;
  currency: string;
  floorplanCount: number;
  furnishedType: string;
  hasOnlineViewing: boolean;
  imageCount: number;
  latitude: number;
  longitude: number;
  letAgreed: boolean;
  lettingType: string;
  maxSizeAc: null;
  maxSizeFt: null;
  minSizeAc: null;
  minSizeFt: null;
  ownership: string;
  postcode: string;
  preOwned: string;
  price: number;
  priceQualifier: string;
  propertyId: number;
  propertySubType: string;
  propertyType: string;
  retirement: boolean;
  selectedCurrency: null;
  selectedPrice: null;
  soldSTC: boolean;
  videoProvider: string;
  viewType: string;
  customUri: string;
}

export interface Metadata {
  publicsiteUrl: string;
  cookieDomain: string;
  currencyCode: string;
  emailAgentUrl: string;
  facebookShareUrl: string;
  twitterShareUrl: string;
  emailShareUrl: string;
  copyLinkUrl: string;
  whatsAppShareUrl: string;
  linkedInShareUrl: string;
  myRightmoveUrl: string;
  mediaServerUrl: string;
  serverTimestamp: number;
  deviceType: string;
  deviceTypeForLazyLoad: string;
  deviceOS: string;
  mvtInfo: MvtInfo[];
  featureSwitches: { [key: string]: boolean };
  adUnitPath: AdUnitPath;
  backLink: BackLink;
  shouldTrackGTMSuccessTracker: boolean;
  emailPreferences: EmailPreferences;
  staticAssetsPath: string;
  staticImagesAndFontsPath: string;
  correlationId: string;
  locationSearchUrl: string;
  marketTrendsExperimentId: string;
  serveEs6Bundles: boolean;
}

export interface AdUnitPath {
  mpu1: string;
  trackingPixel: string;
  ukCreditCheckSponsorship: string;
}

export interface BackLink {
  url: string;
  text: string;
  operation: number;
}

export interface EmailPreferences {
  preferencesUrl: string;
  showModal: boolean;
  source: string;
}

export interface MvtInfo {
  label: string;
  state: State;
  shouldLog: boolean;
}

export enum State {
  Off = "off",
  On = "on",
}

export interface PropertyData {
  id: string;
  status: Status;
  text: Text;
  prices: Prices;
  address: Address;
  keyFeatures: string[];
  images: Image[];
  floorplans: Floorplan[];
  virtualTours: any[];
  customer: Customer;
  industryAffiliations: IndustryAffiliation[];
  rooms: any[];
  location: Location;
  streetView: StreetView;
  nearestAirports: any[];
  nearestStations: NearestStation[];
  showSchoolInfo: boolean;
  countryGuide: null;
  channel: string;
  propertyUrls: PropertyUrls;
  sizings: any[];
  brochures: Brochure[];
  epcGraphs: Brochure[];
  bedrooms: number;
  bathrooms: number;
  transactionType: string;
  tags: any[];
  misInfo: MISInfo;
  dfpAdInfo: DfpAdInfo;
  staticMapImgUrls: StaticMapImgUrls;
  listingHistory: ListingHistory;
  feesApply: null;
  broadband: Broadband;
  contactInfo: ContactInfo;
  lettings: null;
  infoReelItems: InfoReelItem[];
  mortgageCalculator: MortgageCalculator;
  tenure: Tenure;
  soldPropertyType: string;
  auctionProvider: null;
  propertySubType: string;
  businessForSale: boolean;
  commercial: boolean;
  commercialUseClasses: any[];
  affordableBuyingScheme: boolean;
  sharedOwnership: SharedOwnership;
  livingCosts: LivingCosts;
}

export interface Address {
  displayAddress: string;
  countryCode: string;
  deliveryPointId: number;
  ukCountry: string;
  outcode: string;
  incode: string;
}

export interface Broadband {
  disclaimer: string;
  broadbandCheckerUrl: string;
}

export interface Brochure {
  url: string;
  caption: string;
}

export interface ContactInfo {
  contactMethod: string;
  telephoneNumbers: TelephoneNumbers;
}

export interface TelephoneNumbers {
  localNumber: string;
  internationalNumber: null;
  disclaimerText: null;
  disclaimerTitle: null;
  disclaimerDescription: null;
}

export interface Customer {
  branchId: number;
  branchName: string;
  branchDisplayName: string;
  companyName: string;
  companyTradingName: string;
  displayAddress: string;
  logoPath: string;
  customerDescription: CustomerDescription;
  bannerAd: string;
  mpuAd: string;
  customerProfileUrl: string;
  customerBannerAdProfileUrl: string;
  customerMpuAdProfileUrl: string;
  customerPropertiesUrl: string;
  isNewHomeDeveloper: boolean;
  spotlight: null;
  showBrochureLeadModal: boolean;
  developmentInfo: DevelopmentInfo;
  buildToRent: boolean;
  commercial: boolean;
  buildToRentBenefits: any[];
}

export interface CustomerDescription {
  truncatedDescriptionHTML: string;
  isTruncated: boolean;
}

export interface DevelopmentInfo {
  sitePlanUri: null;
  micrositeFeatures: any[];
}

export interface DfpAdInfo {
  channel: string;
  targeting: Targeting[];
}

export interface Targeting {
  key: string;
  value: string[];
}

export interface Floorplan {
  url: string;
  caption: string;
  type: string;
  resizedFloorplanUrls: ResizedFloorplanUrls;
}

export interface ResizedFloorplanUrls {
  size296x197: string;
}

export interface Image {
  url: string;
  caption: null | string;
  resizedImageUrls: ResizedImageUrls;
}

export interface ResizedImageUrls {
  size135x100: string;
  size476x317: string;
  size656x437: string;
}

export interface IndustryAffiliation {
  name: string;
  imagePath: string;
}

export interface InfoReelItem {
  title: string;
  type: string;
  primaryText: string;
  secondaryText: string;
  tooltipText: string;
}

export interface ListingHistory {
  listingUpdateReason: string;
}

export interface LivingCosts {
  councilTaxExempt: boolean;
  councilTaxIncluded: boolean;
  annualGroundRent: null;
  groundRentReviewPeriodInYears: null;
  groundRentPercentageIncrease: null;
  annualServiceCharge: null;
  councilTaxBand: null;
  domesticRates: null;
}

export interface Location {
  latitude: number;
  longitude: number;
  circleRadiusOnMap: number;
  zoomLevel: number;
  pinType: string;
  showMap: boolean;
}

export interface MISInfo {
  branchId: number;
  offerAdvertStampTypeId: null;
  premiumDisplay: boolean;
  premiumDisplayStampId: null;
  brandPlus: boolean;
  featuredProperty: boolean;
}

export interface MortgageCalculator {
  price: number;
  propertyTypeAlias: string;
}

export interface NearestStation {
  name: string;
  types: string[];
  distance: number;
  unit: string;
}

export interface Prices {
  primaryPrice: string;
  secondaryPrice: null;
  displayPriceQualifier: string;
  pricePerSqFt: null;
  message: null;
  exchangeRate: null;
}

export interface PropertyUrls {
  similarPropertiesUrl: string;
  nearbySoldPropertiesUrl: string;
}

export interface SharedOwnership {
  sharedOwnership: boolean;
  ownershipPercentage: null;
  rentPrice: null;
  rentFrequency: string;
}

export interface StaticMapImgUrls {
  staticMapImgUrlMobile: string;
  staticMapImgUrlTablet: string;
  staticMapImgUrlDesktopSmall: string;
  staticMapImgUrlDesktopLarge: string;
}

export interface Status {
  published: boolean;
  archived: boolean;
}

export interface StreetView {
  heading: number;
  pitch: number;
  zoom: number;
  latitude: number;
  longitude: number;
}

export interface Tenure {
  tenureType: string;
  yearsRemainingOnLease: null;
  message: null;
}

export interface Text {
  description: string;
  propertyPhrase: string;
  disclaimer: string;
  auctionFeesDisclaimer: null;
  guidePriceDisclaimer: null;
  reservePriceDisclaimer: null;
  staticMapDisclaimerText: string;
  newHomesBrochureDisclaimer: string;
  shareText: string;
  shareDescription: string;
  pageTitle: string;
  shortDescription: string;
}
