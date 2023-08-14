import {Apis} from "kreeljs-ws";

/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    const testnet =
        //        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"; // just for the record
        " -- no test net --"; // just for the record
    const mainnet =
        "230afd8e06cc690d78c3e37a17bf9e4b19bfd3f15aee2d14f4eb176a8146bf44";
    // treat every other chain as testnet
    return Apis.instance().chain_id !== mainnet;
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "KREEL";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://ecolom.samsonov.net";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://ecolom.samsonov.net",
        show: true,
        editable: false,
        referrer: "maxirmx"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "https://....", // operated as a contribution by Graphene
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ecolom.png").default;
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "lightTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    if (_isTestnet()) {
        return ["KREEL_TEST"];
    }
    return ["KREEL", "USD", "KREEL.USDT", "KREEL.BTC"];
}

export function getDefaultMarket() {
    if (_isTestnet()) {
        return "USD_TEST";
    }
    // [market 0]
    return "KREEL.USDT_KREEL";
    //return "KREEL.USD";
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */
export function getMyMarketsBases() {
    if (_isTestnet()) {
        return ["KREEL_TEST"];
    }
    return ["KREEL", "USD", "KREEL.BTC", "KREEL.USDT"];
}

/*
All trusted tokens
 */
export function get_allTokens() {
    return {
        nativeTokens: ["KREEL"], //, "USD", "EUR", "RUB", "CNY", "GOLD", "SILVER"],
        kreelTokens: [
            //            "DONATE",
            //            "DEXBOT",
            "KREEL.USDT",
            //            "KREEL.ETH",
            //            "KREEL.TRX",
            //            "KREEL.BUSD",
            //            "KREEL.LIME",
            "KREEL.BTC"
        ],
        delistedTokens: [],
        otherTokens: []
    };
}

/*
    These are the default coins that are displayed with the images
 */
export function getImageName(symbol) {
    if (symbol.startsWith("KREEL.")) return symbol;
    if (
        get_allTokens().nativeTokens.indexOf(symbol) !== -1 ||
        symbol == "DONATE" ||
        symbol == "DEXBOT"
    )
        return symbol;

    return "unknown";

    //let imgName = symbol.split(".");
    //return imgName.length === 2 ? imgName[1] : imgName[0];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes(delisted = false) {
    if (_isTestnet()) {
        return ["KREEL_TEST"];
    }
    let tokens = get_allTokens();
    let allTokens = [];
    for (let type in tokens) {
        if (delisted !== true && type == "delistedTokens") continue;
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * MPA-s for show (order) in Collaterals in Account Portfolio
 * @returns {*}
 */
export function getGroupedMPAsRuDEX() {
    let tokens = {
        listed: [],
        rudex: []
    };

    return tokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    if (_isTestnet()) {
        return [["USD", "KREEL_TEST"]];
    }
    return [
        //        ["KREEL", "USD"],
        //        ["KREEL", "EUR"],
        //        ["KREEL", "RUB"],
        //        ["KREEL", "CNY"],
        //        ["KREEL", "GOLD"],
        //        ["KREEL", "SILVER"],
        ["KREEL", "KREEL.USDT"],
        ["KREEL", "KREEL.BTC"],
        ["KREEL", "KREEL.ETH"],
        ["KREEL", "KREEL.TRX"],
        ["KREEL", "KREEL.LIME"],

        ["KREEL.USDT", "KREEL"],
        //        ["KREEL.USDT", "USD"],
        //        ["KREEL.USDT", "EUR"],
        //        ["KREEL.USDT", "RUB"],
        //        ["KREEL.USDT", "CNY"],
        //        ["KREEL.USDT", "GOLD"],
        //        ["KREEL.USDT", "SILVER"],
        ["KREEL.USDT", "KREEL.BTC"],
        ["KREEL.USDT", "KREEL.ETH"],
        ["KREEL.USDT", "KREEL.TRX"],
        ["KREEL.USDT", "KREEL.LIME"],
        ["KREEL.USDT", "KREEL.BUSD"],

        ["KREEL.BTC", "KREEL"],
        ["KREEL.BTC", "KREEL.USDT"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    if (_isTestnet()) {
        return [];
    }
    return ["KREEL."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for gpAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "RUDEX.", "gp"
    return ["KREEL."];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    //    const allowedGateways = ["RUDEX", "RUDEX_BEP20"];
    const allowedGateways = [];
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = "KREEL";
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the KREEL UI placed under https://ecolom.samsonov.net/."
    };
}

/**
 * The featured coins displayed on the Listing page of the UI
 *
 * @returns {[{[string]:[string]}]}
 */
export function getListingCoins() {
    return [];
}

export function getListedCoins() {
    return [];
}
