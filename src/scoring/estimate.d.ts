import { ExtendedMatch, Match } from '../types';
declare const _default: (match: ExtendedMatch | Match, password: string) => ExtendedMatch | {
    guesses: number;
    guessesLog10: number;
    pattern: import("../types").Pattern;
    i: number;
    j: number;
    token: string;
};
export default _default;
