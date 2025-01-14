import Immutable from "immutable";
import alt from "alt-instance";
import GatewayActions from "actions/GatewayActions";
import ls from "common/localStorage";
import {allowedGateway} from "../branding";

const STORAGE_KEY = "__graphene__";
let ss = ls(STORAGE_KEY);

class GatewayStore {
    static isAllowed(backer) {
        return allowedGateway(backer);
    }

    static anyAllowed() {
        return allowedGateway();
    }

    static isDown(backer) {
        // call another static method with this
        return !!this.getState().down.get(backer);
    }

    static getOnChainConfig(gatewayKey) {
        if (!gatewayKey) {
            return {};
        }
        // call another static method with this
        const onChainConfig = this.getState().onChainGatewayConfig;

        if (!onChainConfig || !onChainConfig.gateways) return undefined;

        return onChainConfig.gateways[gatewayKey];
    }

    static getGlobalOnChainConfig() {
        // call another static method with this
        return this.getState().onChainGatewayConfig;
    }

    constructor() {
        this.backedCoins = Immutable.Map(ss.get("backedCoins", {}));
        this.bridgeCoins = Immutable.Map(
            Immutable.fromJS(ss.get("bridgeCoins", {}))
        );
        /**
         * bridgeInputs limits the available depositable coins through blocktrades
         * when using the "Buy" functionaility.
         *
         * While the application still makes sure the asset is possible to deposit,
         * this is to limit the app to display internal assets like bit-assets that
         * BlockTrades accept within their platform.
         */
        this.bridgeInputs = [
            "btc",
            "dash",
            "eth",
            "steem",
            "sbd",
            "doge",
            "bch",
            "ppy",
            "ltc"
        ];
        this.down = Immutable.Map({});

        this.onChainGatewayConfig = null;

        this.bindListeners({
            onFetchCoins: GatewayActions.fetchCoins,
            onFetchCoinsSimple: GatewayActions.fetchCoinsSimple,
            onTemporarilyDisable: GatewayActions.temporarilyDisable,
            onLoadOnChainGatewayConfig: GatewayActions.loadOnChainGatewayConfig
        });
    }

    onFetchCoins({backer, coins, backedCoins, down} = {}) {
        if (backer && coins) {
            this.backedCoins = this.backedCoins.set(backer, backedCoins);

            ss.set("backedCoins", this.backedCoins.toJS());

            this.down = this.down.set(backer, false);
        }

        if (down) {
            this.down = this.down.set(down, true);
        }
    }

    onFetchCoinsSimple({backer, coins, down} = {}) {
        if (backer && coins) {
            this.backedCoins = this.backedCoins.set(backer, coins);

            ss.set("backedCoins", this.backedCoins.toJS());

            this.down = this.down.set(backer, false);
        }

        if (down) {
            this.down = this.down.set(down, true);
        }
    }

    onTemporarilyDisable({backer}) {
        this.down = this.down.set(backer, true);

        if (this.backedCoins.get(backer)) {
            this.backedCoins = this.backedCoins.remove(backer);
            ss.set("backedCoins", this.backedCoins.toJS());
        }
        if (this.bridgeCoins.get(backer)) {
            this.bridgeCoins = this.bridgeCoins.remove(backer);
            ss.set("bridgeCoins", this.bridgeCoins.toJS());
        }
    }

    onLoadOnChainGatewayConfig(config) {
        this.onChainGatewayConfig = config || {};
    }
}

export default alt.createStore(GatewayStore, "GatewayStore");
