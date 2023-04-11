import NodeCache = require('node-cache');

export class Cache {

    private static readonly config = require('../config.js');
    private static readonly cache: NodeCache = new NodeCache({stdTTL: this.config.cacheTimeOut, checkperiod: this.config.cacheCheckPeriod});

    public static getCache(): NodeCache {
        return this.cache;
    }

    public static isEnabled(): boolean {
        return this.config.useCache;
    }

    public static isInCache(key: string): boolean {
        return this.cache.get(key) != null;
    }

    public static get(key: string): any {
        return this.cache.get(key);
    }

    public static set(key: string, obj: any) {
        this.cache.set(key, obj);
    }

    public static generateKey(className: string, ...params): string {
        let base = "cache_" + className + "_";
        for (let param of params) {
            base += param + "_";
        }

        return base;
    }
}