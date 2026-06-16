import { POLICIES, POLICY_PDF, POLICY_PDF_NAME } from '../data/policies';
import './Policies.css';

async function downloadPolicyPdf() {
  try {
    const response = await fetch(POLICY_PDF);
    if (!response.ok) throw new Error('Download failed');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = POLICY_PDF_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch {
    window.open(POLICY_PDF, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Compact overview of eight major policies with PDF download.
 */
function Policies() {
  return (
    <section id="policies" className="section section--alt policies" aria-labelledby="policies-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="policies-heading">Company Policies</h2>
          <p>Eight major workplace policies — download the complete document as PDF.</p>
        </header>

        <div className="policies__actions fade-in fade-in-delay-1">
          <button type="button" onClick={downloadPolicyPdf} className="policies__download btn btn--primary">
            Download Policy PDF
          </button>
        </div>

        <div className="policies__grid fade-in fade-in-delay-2">
          {POLICIES.map((policy, index) => (
            <article
              key={policy.id}
              className={`policies__card fade-in fade-in-delay-${Math.min(index + 1, 4)}`}
            >
              <div className="policies__card-head">
                <span className="policies__card-num">{index + 1}</span>
                <span className="policies__card-version">v{policy.version}</span>
              </div>
              <h3 className="policies__card-title">{policy.title}</h3>
              <p className="policies__card-summary">{policy.summary}</p>
              <ul className="policies__card-list">
                {policy.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Policies;
