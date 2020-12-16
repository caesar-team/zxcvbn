import { ExtendedMatch } from '../types';
declare class MatchRegex {
    match(password: string, regexes?: {
        recentYear: RegExp;
    }): ExtendedMatch[];
}
export default MatchRegex;
