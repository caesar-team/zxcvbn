declare type UpdateParams = {
    i: number;
    j: number;
    delta: number;
    password: string;
    result: any[];
};
declare class MatchSequence {
    MAX_DELTA: number;
    match(password: string): any[];
    update({ i, j, delta, password, result }: UpdateParams): number | null;
}
export default MatchSequence;
