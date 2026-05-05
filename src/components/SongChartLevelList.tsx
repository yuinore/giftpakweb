import { difficulties } from '@src/enums/Difficulties';
import './SongChartLevelList.scss';
import type { Chart } from '@src/types/Chart';

export default function SongChartLevelList({ charts }: { charts: Chart[] }) {
  return (
    <div className="song-chart-level-list">
      {charts.map((c, i) => {
        const d = difficulties[c.difficulty];
        return (
          <span key={`${c.difficulty}-${i}-${String(c.playlevel)}`}>
            <span
              className="song-chart-level-list__level"
              style={{ color: d.color }}
            >
              <span className="song-chart-level-list__difficulty-symbol">
                {d.symbol}
              </span>
              {c.playlevel}
            </span>
          </span>
        );
      })}
    </div>
  );
}
