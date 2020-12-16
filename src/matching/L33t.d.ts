import { ExtendedMatch, LooseObject } from '../types';
declare class MatchL33t {
    MatchDictionary: any;
    constructor({ userInputs }?: {
        userInputs?: never[] | undefined;
    });
    match(password: string): ExtendedMatch[];
    relevantL33tSubtable(password: string, table: any): LooseObject;
    enumerateL33tSubs(table: any): any;
    getSubs(keys: string[], subs: string[][], table: any): any;
    dedup(subs: string[][]): string[][];
}
export default MatchL33t;
