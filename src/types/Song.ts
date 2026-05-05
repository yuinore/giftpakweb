import type { ChartSet } from '@src/types/ChartSet';

interface Song {
  title: string;
  banner: string;
  chartSets: ChartSet[];
}

export type { Song };
