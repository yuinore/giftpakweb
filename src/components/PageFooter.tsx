import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  XShareButton,
} from 'react-share';

import './PageFooter.scss';

const SHARE_TITLE = '幸せの青い鳥 BMS Package 特設ページ';

export default function PageFooter() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <footer className="page-footer">
      <div className="share-button" aria-label="このページをシェア">
        <div className="share-network">
          <XShareButton
            url={shareUrl}
            title={SHARE_TITLE}
            className="share-network__button"
          >
            <XIcon size={24} round />
          </XShareButton>
        </div>
        <div className="share-network">
          <FacebookShareButton url={shareUrl} className="share-network__button">
            <FacebookIcon size={24} round />
          </FacebookShareButton>
        </div>
      </div>
      <p>Designed by yuinore / Team nemusugi.jp</p>
    </footer>
  );
}
