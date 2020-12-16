import { OptionsType, CrackTimesSeconds, LooseObject, ExtendedMatch } from './types';
interface Result {
    calcTime?: number;
    password: string;
    guesses: number;
    guessesLog10: number;
    sequence: ExtendedMatch[];
    crackTimesSeconds: CrackTimesSeconds;
    crackTimesDisplay: LooseObject;
    score: number;
    feedback: object;
}
declare const _default: (password: string, userInputs?: any[], options?: OptionsType) => Result;
export default _default;
