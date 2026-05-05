import type { Contributor } from '@src/types/Contributor';

interface ContributorSet {
  /** 見出しに表示するラベル */
  domainName: string;
  contributors: Contributor[];
}

export type { ContributorSet };
