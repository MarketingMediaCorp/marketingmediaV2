import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";

const FooterOne = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">World</h2>
                <ul className="footer-nav">
                  <li>
                  <Link href="/">
                    <a>U.N.</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Conflicts</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Terrorism</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Disasters</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>Global Economy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>Global Economy</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Environment</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Religion</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>Scandals</a>
                    </Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Politics</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">
                        <a>Executive</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>Senate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>House</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Judiciary</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Foreign policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>Polls</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                        <a>Elections</a>
                    </Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Entertainment</h2>
                <ul className="footer-nav">
                  <li>
                  <Link href="/">
                    <a>Celebrity News</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Movies</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>TV News</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Music News</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Style News</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Entertainment Video</a>
                    </Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Business</h2>
                <ul className="footer-nav">
                  <li>
                  <Link href="/">
                    <a>Markets</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Politics</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Technology</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Features</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Business Leaders</a>
                    </Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Health</h2>
                <ul className="footer-nav">
                  <li>
                  <Link href="/">
                    <a>Healthy Living</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Medical Research</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Mental Health</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Cancer</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Heart Health</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Children&apos;s Health</a>
                    </Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">About</h2>
                <ul className="footer-nav">
                  <li>
                  <Link href="/">
                    <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Fox Around the World</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Advertise With Us</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Ad Choices</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Media Relations</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Compliance</a>
                    </Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
          </div>
          {/* End of .row */}
        </div>
        {/* End of .footer-top */}
        <div className="footer-mid">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
                <Link href="/">
                    <a> 
                        <Image 
                         src="/images/logo-symbol.svg"
                         alt="footer logo"
                         className="footer-logo"
                         width={86}
                         height={28}
                        />
                    </a>
                </Link>
              </div>
              {/* End of .brand-logo-container */}
            </div>
            {/* End of .col-md-6 */}
            <div className="col-md-auto">
              <div className="footer-social-share-wrapper">
                <div className="footer-social-share">
                  <div className="axil-social-title">Find us here</div>
                  <ul className="social-share social-share__with-bg">
                  <li>
                    <a href={SocialLink.fb.url}>
                      <i className={SocialLink.fb.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.twitter.url}>
                      <i className={SocialLink.twitter.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.yt.url}>
                      <i className={SocialLink.yt.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.linked.url}>
                      <i className={SocialLink.linked.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.pinterest.url}>
                      <i className={SocialLink.pinterest.icon} />
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
              {/* End of .footer-social-share-wrapper */}
            </div>
            {/* End of .col-md-6 */}
          </div>
          {/* End of .row */}
        </div>
        {/* End of .footer-mid */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
                <Link href="/">
                    <a>Terms of Use</a>
                </Link>
            </li>
            <li>
            <Link href="/">
              <a>Accessibility &amp; CC</a>
              </Link>
            </li>
            <li>
            <Link href="/">
              <a>AdChoices</a>
              </Link>
            </li>
            <li>
            <Link href="/">
              <a>Modern Slavery Act Statement</a>
              </Link>
            </li>
            <li>
            <Link href="/">
              <a>Advertise with us</a>
              </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Papr Store</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Newsletters</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Transcripts</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>License Footage</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Sitemap</a>
                </Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}
          <p className="axil-copyright-txt">
            © {new Date().getFullYear()}. All rights reserved by Your Company.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default FooterOne;
