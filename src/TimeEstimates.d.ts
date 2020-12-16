import { CrackTimesSeconds, LooseObject } from './types';
declare class TimeEstimates {
    translate(displayStr: string, value: number | undefined, displayNum: number | null): any;
    estimateAttackTimes(guesses: number): {
        crackTimesSeconds: CrackTimesSeconds;
        crackTimesDisplay: LooseObject;
        score: number;
    };
    guessesToScore(guesses: number): 1 | 0 | 2 | 3 | 4;
    displayTime(seconds: number): any;
}
export default TimeEstimates;
