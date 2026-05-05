import IntroTagline from '@src/components/IntroTagline';
import PackageLogo from '@src/components/PackageLogo';
import './PageHeader.scss';

export default function PageHeader() {
  return (
    <header className="page-header">
      <IntroTagline />
      <PackageLogo />
    </header>
  );
}
