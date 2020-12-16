import defaultAdjacencyGraphs from '~/data/adjacency_graphs';
import translationKeys from '~/data/feedback/keys';
import l33tTableDefault from '~/data/l33tTable';
export declare type DefaultAdjacencyGraphsKeys = keyof typeof defaultAdjacencyGraphs;
export declare type DefaultAdjacencyGraphs = typeof defaultAdjacencyGraphs;
export declare type TranslationKeys = typeof translationKeys;
export declare type L33tTableDefault = typeof l33tTableDefault;
export declare type FrequencyLists = {
    userInputs: [];
};
export interface LooseObject {
    [key: string]: any;
}
export declare type Pattern = 'dictionary' | 'regex' | 'repeat' | 'bruteforce' | 'sequence' | 'spatial' | 'date';
export declare type DictionaryNames = 'passwords' | 'maleNames' | 'femaleNames' | 'tvAndFilm' | 'wikipedia' | 'surnames' | 'userInputs';
export interface Match {
    pattern: Pattern;
    i: number;
    j: number;
    token: string;
}
export interface ExtendedMatch extends Match {
    matchedWord: string;
    rank: number;
    dictionaryName: DictionaryNames;
    reversed: boolean;
    l33t: boolean;
    baseGuesses: number;
    uppercaseVariations: number;
    l33tVariations: number;
    guesses: number;
    guessesLog10: number;
    turns: number;
    baseToken: string[] | string;
    sub?: LooseObject;
    subDisplay?: string;
    sequenceName?: 'lower' | 'digits';
    sequenceSpace?: number;
    ascending?: boolean;
    regexName?: 'recentYear' | 'alphaLower' | 'alphaUpper' | 'alpha' | 'alphanumeric' | 'digits' | 'symbols';
    shiftedCount?: number;
    graph?: DefaultAdjacencyGraphsKeys;
    repeatCount?: number;
    regexMatch?: string[];
    year: number;
    month: number;
    day: number;
    separator?: string;
}
export interface Optimal {
    m: Match;
    pi: Match;
    g: Match;
}
export interface CrackTimesSeconds {
    onlineThrottling100PerHour: number;
    onlineThrottling10PerSecond: number;
    offlineSlowHashing1e4PerSecond: number;
    offlineFastHashing1e10PerSecond: number;
}
export interface CrackTimesDisplay {
    onlineThrottling100PerHour: string;
    onlineThrottling10PerSecond: string;
    offlineSlowHashing1e4PerSecond: string;
    offlineFastHashing1e10PerSecond: string;
}
export interface FeedbackType {
    warning: string;
    suggestions: string[];
}
export declare type MatchingMatcherParams = 'userInputs' | 'dictionary' | 'l33tTable' | 'graphs';
export declare type MatchingMatcherNames = 'dictionary' | 'dictionaryReverse' | 'l33t' | 'spatial' | 'repeat' | 'sequence' | 'regex' | 'date';
export declare type Keyboards = 'qwerty' | 'qwertz' | 'qwertz_altgr' | 'qwertz_altgr_shift' | 'dvorak' | string;
export declare type Keypads = 'keypad' | 'mac_keypad' | string;
export declare type OptionsL33tTable = L33tTableDefault | {
    [key: string]: string[];
};
export declare type OptionsDictionary = FrequencyLists | {
    [key: string]: string[] | number[];
};
export declare type OptionsGraph = DefaultAdjacencyGraphs | {
    [key: string]: {
        [key: string]: string[];
    };
};
export interface OptionsType {
    translations?: TranslationKeys;
    graphs?: OptionsGraph;
    usedKeyboard?: Keyboards;
    usedKeypad?: Keypads;
    l33tTable?: OptionsL33tTable;
    dictionary?: OptionsDictionary;
}
