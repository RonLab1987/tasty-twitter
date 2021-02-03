"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigRepositoryLocal = void 0;
const rxjs_1 = require("rxjs");
const constants_1 = require("./constants");
class ApplicationConfigRepositoryLocal {
    constructor(_storage) {
        this._storage = _storage;
        this._config = new rxjs_1.ReplaySubject(1);
        this._initConfig();
    }
    get config$() {
        return this._config;
    }
    changeConfig(config) {
        return new Promise(resolve => {
            this._config.next(config);
            this._saveConfig(config);
            resolve();
        });
    }
    _initConfig() {
        const config = this._storage.getItem(constants_1.APPLICATION_CONFIG_KEY);
        if (!config) {
            this._config.next(constants_1.DEFAULT_CONFIG);
            return;
        }
        this._config.next(JSON.parse(config));
    }
    _saveConfig(config) {
        this._storage.setItem(constants_1.APPLICATION_CONFIG_KEY, JSON.stringify(config));
    }
}
exports.ApplicationConfigRepositoryLocal = ApplicationConfigRepositoryLocal;
