
declare class ObjectUtil {

    static populateObject(targetObject: Object, sourceObject: Object, overwrite?: boolean): Object;

    static traverseObject(obj: Object, processFunc: (value: any) => void): void;

    static formatNumber(
        value: number,
        params: number | {
            places: number,
            locale?: string,
            preserveTrailingZeroes?: boolean,
            noSeparator?: boolean
        }
    ): string;

    static copyOwnJsonProperties(
        source: Object,
        target?: Object | undefined,
        conversionCallback?: (property: string, value: any) => any
    ): Object;

    static removeUndefinedProperties(obj: Object): Object;

    static roundNumber(value: number, places?: number): number;

    static formatNumber(value: number, params: object): string;

    static parseNumber(value: any, places?: number, emptyStringValue?: boolean): number;

    static objectToTime(datetime: any): number;

    static objectToDate(datetime: any): Date;
}

export = ObjectUtil;
