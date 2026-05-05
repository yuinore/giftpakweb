import './VideoEmbed.scss';

export default function VideoEmbed() {
  return (
    <div className="video-embed-wrap">
      <div className="video-embed">
        <iframe
          className="video-embed__frame"
          src="https://www.youtube.com/embed/ttTZ4m-OK9E?si=soLfQbwTcy-BW85P"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
