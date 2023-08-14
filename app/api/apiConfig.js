import {getFaucet, getTestFaucet} from "../branding";

export const rudexAPIs = {
    BASE: "https://gateway.ecolom.samsonov.net/api/rudex_new",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/simple-api/initiate-trade"
};

export const bep20rudexAPIs = {
    BASE: "http://gateway.ecolom.samsonov.net/api/rudex_new_bep20",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/simple-api/initiate-trade"
};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia and New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    // If you want a location to be translated, add the translation to settings in locale-xx.js
    // and use an object {translate: key} in WS_NODE_LIST
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: [
        {
            url: "wss://kreel0.samsonov.net:8980",
            region: "Eastern Europe",
            country: "Russia",
            location: "St. Petersburg",
            operator: "maxirmx",
            contact: "telegram:maxi_rmx"
        },
        {
            url: "wss://kreel1.samsonov.net:8980",
            region: "Northern Asia",
            country: "Russia",
            location: "Novosibirsk",
            operator: "maxirmx",
            contact: "telegram:maxi_rmx"
        },
        {
            url: "wss://kreel2.samsonov.net:8980",
            region: "Eastern Europe",
            country: "Russia",
            location: "St. Petersburg",
            operator: "maxirmx",
            contact: "telegram:maxi_rmx"
        }
    ],
    ES_WRAPPER_LIST: [
        {
            url: "https://kreel2.samsonov.net",
            region: "Eastern Europe",
            country: "Russia",
            location: "St. Petersburg",
            operator: "Witness: maxirmx",
            contact: "telegram:maxi_rmx"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: getTestFaucet().url
};
