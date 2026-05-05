import { songs } from '@src/enums/Songs';
import SongChartLevelList from '@src/components/SongChartLevelList';
import './SongTable.scss';

export default function SongTable() {
  return (
    <div className="song-table__wrap">
      <div className="song-table__heading">
        幸せの青い鳥 BMS Package 収録楽曲リスト
      </div>

      <table className="song-table__outer">
        <tbody>
          {songs.flatMap((song) => {
            return [
              <tr key={song.title}>
                <td className="song-table__cell--banner">
                  <img
                    className="song-table__banner"
                    src={song.banner}
                    alt={song.title}
                  />
                </td>
                <td className="song-table__cell--details">
                  <table className="song-table__inner">
                    <tbody>
                      {song.chartSets.map((row) => (
                        <tr key={row.setName}>
                          <td className="song-table__cell--kind">
                            {row.setName}
                          </td>
                          <td className="song-table__cell--charts">
                            <SongChartLevelList charts={row.charts} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
