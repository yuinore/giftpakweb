import birdBanner from '@src/assets/banner/_bird_banner.png';
import argentBanner from '@src/assets/banner/_argent_banner.png';
import cationBanner from '@src/assets/banner/_cation_banner.png';
import prolineBanner from '@src/assets/banner/_proline_banner.png';

import type { Song } from '@src/types/Song';

export const songs: Song[] = [
  {
    title: 'The Blue Bird',
    banner: birdBanner,
    chartSets: [
      {
        setName: '7keys',
        charts: [
          {
            difficulty: 'beginner',
            playlevel: 4,
          },
          {
            difficulty: 'normal',
            playlevel: 7,
          },
          {
            difficulty: 'hyper',
            playlevel: 11,
          },
          {
            difficulty: 'another',
            playlevel: 12,
          },
          {
            difficulty: 'insane',
            playlevel: 3,
          },
          {
            difficulty: 'insane',
            playlevel: 15,
          },
          {
            difficulty: 'insane',
            playlevel: 20,
          },
        ],
      },
      {
        setName: '14keys',
        charts: [
          {
            difficulty: 'beginner',
            playlevel: 2,
          },
          {
            difficulty: 'normal',
            playlevel: 5,
          },
          {
            difficulty: 'hyper',
            playlevel: 9,
          },
          {
            difficulty: 'another',
            playlevel: 12,
          },
        ],
      },
      {
        setName: '6K',
        charts: [
          {
            difficulty: 'insane',
            playlevel: '21 (6UE)',
          },
        ],
      },
    ],
  },
  {
    title: 'Sweets ♥',
    banner: argentBanner,
    chartSets: [
      {
        setName: '7keys',
        charts: [
          {
            difficulty: 'beginner',
            playlevel: 3,
          },
          {
            difficulty: 'normal',
            playlevel: 5,
          },
          {
            difficulty: 'hyper',
            playlevel: 8,
          },
          {
            difficulty: 'another',
            playlevel: 10,
          },
          {
            difficulty: 'insane',
            playlevel: 1,
          },
          {
            difficulty: 'insane',
            playlevel: 24,
          },
        ],
      },
      {
        setName: '14keys',
        charts: [
          {
            difficulty: 'beginner',
            playlevel: 2,
          },
          {
            difficulty: 'normal',
            playlevel: 4,
          },
          {
            difficulty: 'hyper',
            playlevel: 8,
          },
          {
            difficulty: 'another',
            playlevel: 11,
          },
        ],
      },
    ],
  },
  {
    title: 'In and Out',
    banner: cationBanner,
    chartSets: [
      {
        setName: '7keys',
        charts: [
          {
            difficulty: 'beginner',
            playlevel: 2,
          },
          {
            difficulty: 'normal',
            playlevel: 8,
          },
          {
            difficulty: 'hyper',
            playlevel: 10,
          },
          {
            difficulty: 'another',
            playlevel: 12,
          },
          {
            difficulty: 'insane',
            playlevel: 10,
          },
        ],
      },
    ],
  },
  {
    title: 'Proline',
    banner: prolineBanner,
    chartSets: [
      {
        setName: '7keys',
        charts: [
          {
            difficulty: 'beginner',
            playlevel: 3,
          },
          {
            difficulty: 'normal',
            playlevel: 7,
          },
          {
            difficulty: 'hyper',
            playlevel: 9,
          },
          {
            difficulty: 'another',
            playlevel: 12,
          },
          {
            difficulty: 'insane',
            playlevel: 5,
          },
        ],
      },
      {
        setName: '4K',
        charts: [
          {
            difficulty: 'insane',
            playlevel: 25,
          },
        ],
      },
    ],
  },
];
