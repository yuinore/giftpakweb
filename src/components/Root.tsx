import CreditSection from '@src/components/CreditSection';
import DownloadSection from '@src/components/DownloadSection';
import PageFooter from '@src/components/PageFooter';
import PageHeader from '@src/components/PageHeader';
import SongTable from '@src/components/SongTable';
import VideoEmbed from '@src/components/VideoEmbed';
import { contributors } from '@src/enums/Contributors';
import './Root.scss';

export default function Root() {
  return (
    <div className="root-container">
      <PageHeader />

      <div className="root-main">
        <VideoEmbed />

        <SongTable />

        <CreditSection contributorSets={contributors} />

        <DownloadSection />
      </div>

      <PageFooter />
    </div>
  );
}
