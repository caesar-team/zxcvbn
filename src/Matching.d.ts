declare class Matching {
    matchers: any[];
    options: {};
    match(password: string, options?: any): import("./types").ExtendedMatch[];
}
export default Matching;
