import Image from "next/image";
import cx from "./Footer.module.scss";

const links = [["Home","#hero"],["Services","#services"],["Contact Us","#contact"]];

export default function Footer() {
  return (
    <footer className={cx.footer}>

      {/* ── Top: logo + cloud blobs ─────────────────────────────── */}
      <div className={`relative flex flex-col items-center ${cx.topSection}`}>

        {/* Cloud Left */}
        <div aria-hidden className={cx.cloudLeft}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/67f510f568bf33e1f98526f9/683476c785757945959acf7c_768d2b7b27279bd55483e2319c8b7397_cloud%20L.avif"
            alt="" className="w-full h-auto opacity-70" />
        </div>

        {/* Cloud Right */}
        <div aria-hidden className={cx.cloudRight}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/67f510f568bf33e1f98526f9/683476ca07fbd2d53025b667_3431aeb77ddc0d16652ac568fc3fb236_cloud%20R.avif"
            alt="" className="w-full h-auto opacity-70" />
        </div>

        {/* Logo + brand */}
        <div className="relative flex flex-col items-center z-10">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp" width={80} height={80} className="rounded-full mb-5" unoptimized />
          <h3 className={`mb-2 ${cx.brandName}`}>
            Lucenex Corp
          </h3>
          <p className={cx.tagline}>
            Advanced Data Intelligence &amp;<br />AI Automation Solutions
          </p>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────── */}
      <div className={`mx-auto px-8 ${cx.inner}`}>
        <div className={cx.divider} />

        {/* ── Two columns ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">

          {/* Get In Touch */}
          <div>
            <p className={`mb-3 ${cx.sectionLabel}`}>
              Get In Touch
            </p>
            <h4 className={`mb-3 ${cx.getInTitle}`}>
              Let&apos;s Discuss Your Vision
            </h4>
            <p className={cx.getInBody}>
              Simply email us at
            </p>
            <a href="mailto:contact@lucenexcorp.com" className={cx.emailLink}>
              contact@lucenexcorp.com
            </a>
          </div>

          {/* Quick Links — right-aligned */}
          <div className="md:text-right">
            <p className={`mb-3 ${cx.sectionLabel}`}>
              Quick Links
            </p>
            <ul className={`flex flex-col ${cx.linksList}`}>
              {links.map(([label, href]) => (
                <li key={href} className={cx.linkItem}>
                  <a href={href} className={`${cx.linkAnchor} hover:text-black transition-colors`}>
                    {label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arr">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 ${cx.bottomBar}`}>
          <p className={cx.copyright}>
            &copy; Lucenex Corp. All Rights Reserved 2026
          </p>
          <a href="https://www.linkedin.com/company/lucenex-corp/" target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-2 hover:opacity-70 transition-opacity ${cx.linkedin}`}>
            <svg className="w-4 h-4 shrink-0" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect with us on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
