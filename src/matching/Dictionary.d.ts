import { ExtendedMatch, FrequencyLists } from '../types';
declare class MatchDictionary {
    rankedDictionaries: FrequencyLists;
    constructor({ userInputs }?: {
        userInputs: string[];
    });
    match(password: string): ExtendedMatch[];
}
export default MatchDictionary;
