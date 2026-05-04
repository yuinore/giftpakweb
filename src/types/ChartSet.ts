import type { Chart } from '@src/types/Chart';

interface ChartSet {
  setName: '7keys' | '9keys' | '4K' | '6K';
  charts: Chart[];
}

export type { ChartSet };
