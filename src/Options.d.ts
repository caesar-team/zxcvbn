import { TranslationKeys, Keyboards, Keypads, OptionsType, FrequencyLists, DefaultAdjacencyGraphsKeys, OptionsL33tTable, OptionsDictionary, OptionsGraph } from '~/types';
declare class Options {
    l33tTable: OptionsL33tTable;
    dictionary: OptionsDictionary;
    rankedDictionaries: FrequencyLists;
    usedKeyboard: Keyboards;
    usedKeypad: Keypads;
    translations: TranslationKeys;
    graphs: OptionsGraph;
    availableGraphs: DefaultAdjacencyGraphsKeys[];
    keyboardAverageDegree: number;
    keypadAverageDegree: number;
    keyboardStartingPositions: number;
    keypadStartingPositions: number;
    setOptions(options?: OptionsType): void;
    setTranslations(translations: TranslationKeys): void;
    checkCustomTranslations(translations: TranslationKeys): boolean;
    setRankedDictionaries(): void;
    setAdjacencyGraphs(adjacencyGraphs: OptionsGraph): void;
    calcAverageDegree(graph: OptionsGraph): number;
}
declare const _default: Options;
export default _default;
