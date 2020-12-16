import { DefaultAdjacencyGraphsKeys, ExtendedMatch } from '../types';
import defaultAdjacencyGraphs from '~/data/adjacency_graphs';
declare class MatchSpatial {
    SHIFTED_RX: RegExp;
    match(password: string): ExtendedMatch[];
    helper(password: string, graph: typeof defaultAdjacencyGraphs, graphName: DefaultAdjacencyGraphsKeys): ExtendedMatch[];
}
export default MatchSpatial;
