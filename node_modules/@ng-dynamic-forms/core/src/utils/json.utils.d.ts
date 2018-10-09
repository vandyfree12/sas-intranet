export declare class JSONUtils {
    static maskToString(mask: string | RegExp | (string | RegExp)[]): string | string[] | null;
    static maskFromString(mask: string | string[]): string | RegExp | (string | RegExp)[] | null;
    static parseReviver(_key: string, value: any): any;
}
