import Link from "next/link";
import Offcanvas from 'react-bootstrap/Offcanvas';
import SocialLink from "../../data/social/SocialLink.json";

const OffcanvasMenu = ({ofcshow, ofcHandleClose}) => {
    return ( 
        <Offcanvas show={ofcshow} onHide={ofcHandleClose} placement="end" className="offcanvas-menu">
            <Offcanvas.Header closeButton className="close-offcanvasmeu"></Offcanvas.Header>
            <div className="side-nav">                
                <span className="display-1 fs-1 light mb-5" id="brand-name" style={{color : "#000000"}}>Find what you &apos; re looking for</span>

                <div className="side-nav-inner nicescroll-container">
                   
                    <div className="side-nav-content">
                    
                    <div className="row ">
                        <div className="col-lg-6">
                        <ul className="main-navigation side-navigation list-inline flex-column">
                            <li>
                                <Link href="/contact">
                                    <a>Contact Us</a>
                                </Link>
                            </li>
                    
                        </ul>
                        {/* End of .main-navigation */}
                        </div>
                        {/* End of  .col-md-6 */}
                        <div className="col-lg-6">
                        <div className="axil-contact-info-inner">
                            
                            <div className="axil-contact-info">
                                   
                                    <div>
                                    <Link className="h5 m-b-xs-5 mt-5" href="/privacy">
                                        <a>Privacy Policy</a>
                                        
                                    </Link>
                                    </div>
                                    <div>
                                    <Link className="h5 m-b-xs-5" href="/disclaimer">
                                        <a>Disclaimer</a>
                                        
                                    </Link>
                                    </div>
                                    <div>
                                    <Link className="h5 m-b-xs-5" href="/cookie">
                                        <a>Cookie Policy</a>
                                        
                                    </Link>
                                    </div>
                                    <div>
                                    <Link className="h5 m-b-xs-5" href="/terms">
                                        <a>Terms of Use</a>
                                        
                                    </Link>
                                    </div>
                            
                            {/* End of address */}
                            <div className="contact-social-share m-t-xs-30">
                                <div className="axil-social-title h5">Follow Us on Twitter</div>
                                <ul className="social-share social-share__with-bg">
                              
                                <li>
                                    <a href={SocialLink.twitter.url}>
                                    <i className={SocialLink.twitter.icon} />
                                    </a>
                                </li>
                            
                               
                                </ul>
                            </div>
                            {/* End of .contact-shsdf */}
                            </div>
                            {/* End of .axil-contact-info */}
                        </div>
                        {/* End of .axil-contact-info-inner */}
                        </div>
                    </div>
                    {/* End of .row */}
                    </div>
                </div>
                {/* End of .side-nav-inner */}
            </div>
      </Offcanvas>
     );
}
 
export default OffcanvasMenu;