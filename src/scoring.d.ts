import { ExtendedMatch } from './types';
declare const _default: {
    mostGuessableMatchSequence(password: string, matches: ExtendedMatch[], excludeAdditive?: boolean): {
        password: string;
        guesses: number;
        guessesLog10: number;
        sequence: ExtendedMatch[];
    };
};
export default _default;
