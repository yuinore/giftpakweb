import './CreditSection.scss';
import type { ContributorSet } from '@src/types/ContributorSet';

interface CreditSectionProps {
  contributorSets: ContributorSet[];
}

export default function CreditSection({ contributorSets }: CreditSectionProps) {
  return (
    <div className="credit-section">
      {contributorSets.map((set) => (
        <section key={set.domainName} className="credit-section__set">
          <div>
            <h2 className="credit-section__heading">{set.domainName}</h2>
          </div>
          <div>
            {set.contributors.map((c) => (
              <span key={c.name} className="credit-section__name">
                {c.name}
                <wbr />
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
