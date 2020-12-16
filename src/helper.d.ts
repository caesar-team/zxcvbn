import { ExtendedMatch, LooseObject } from './types';
export declare const empty: (obj: LooseObject) => boolean;
export declare const extend: (listToExtend: any[], list: any[]) => number;
export declare const translate: (string: string, chrMap: LooseObject) => string;
export declare const mod: (n: number, m: number) => number;
export declare const sorted: (matches: ExtendedMatch[]) => ExtendedMatch[];
export declare const buildRankedDictionary: (orderedList: any[]) => LooseObject;
