import DownloadButton from '@src/components/DownloadButton';
import './DownloadSection.scss';

export default function DownloadSection() {
  return (
    <div className="download-section">
      <DownloadButton />

      <div className="download-section__note">
        <span className="download-section__note-text">
          再生には BMS プレイヤー本体のダウンロードが必要です。
        </span>
      </div>
    </div>
  );
}
