import { ExtendedMatch } from '../types';
declare class MatchDate {
    match(password: string): ExtendedMatch[];
    mapIntegersToDayMonthYear(integers: number[]): {
        year: number | number[];
        month: number;
        day: number;
    } | null;
    mapIntegersToDayMonth(integers: number[]): {
        day: number;
        month: number;
    } | null;
    twoToFourDigitYear(year: number): number;
}
export default MatchDate;
