import './DownloadButton.scss';

interface DownloadButtonProps {
  href: string;
}

export default function DownloadButton({ href }: DownloadButtonProps) {
  return (
    <a className="download-button" href={href}>
      <span className="download-button__highlight" aria-hidden="true" />
      <span className="download-button__text">Click to Download</span>
    </a>
  );
}
