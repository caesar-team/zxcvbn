import { ExtendedMatch, FeedbackType } from './types';
declare class Feedback {
    defaultFeedback: FeedbackType;
    constructor();
    setDefaultSuggestions(): void;
    getFeedback(score: number, sequence: ExtendedMatch[]): {
        warning: any;
        suggestions: string[];
    };
    getMatchFeedback(match: ExtendedMatch, isSoleMatch: Boolean): {
        warning: any;
        suggestions: string[];
    };
    getDictionaryMatchFeedback(match: ExtendedMatch, isSoleMatch: Boolean): {
        warning: string;
        suggestions: string[];
    };
}
export default Feedback;
