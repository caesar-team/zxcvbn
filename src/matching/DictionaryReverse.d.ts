import { ExtendedMatch } from '../types';
declare class MatchDictionaryReverse {
    MatchDictionary: any;
    constructor({ userInputs }?: {
        userInputs?: never[];
    });
    match(password: string): ExtendedMatch[];
}
export default MatchDictionaryReverse;
