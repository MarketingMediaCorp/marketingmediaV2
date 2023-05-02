import Image from "next/image";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";

const ContactPage = () => {

    return (
        <>
            <HeadMeta metaTitle="Contact Us" />
            <HeaderOne />
            <Breadcrumb aPage="Contact Us" />
            <BreadcrumbBanner pageTitle="Contact Us" />
            <div className="axil-about-us section-gap  section-gap-top__with-text">
                <div className="container">
                    <SectionTitleTwo title="Meet Our Publishing Authors" paragraph="Wherever &amp; whenever you need us. We are here for you - contact us for all your support needs,
                        <br />be it technical, general queries or information support." />
                    <figure className="m-b-xs-30 p-t-xs-10">
                        <Image
                            src="/images/contact-banner.jpg"
                            height={451}
                            width={1110}
                            alt="contact banner"
                        />
                    </figure>
                </div>
            </div>
            <div className="contact-form section-gap bg-grey-light-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <ContactForm />
                        </div>
                        <div className="col-lg-5">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-gap our-location section-gap-top__with-text">
                <div className="container">
                    <div className="section-title">
                        <h2 className="axil-title m-b-xs-40">
                            Our Location
                        </h2>
                    </div>
                    {/* End of .section-title */}
                    <div className="axil-map-wrapper m-b-xs-30">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d848618.3019582209!2d-117.3496119!3d33.8145003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64ed3c3ce8f%3A0x8710c5557f723e2a!2s106+W+1st+St%2C+Los+Angeles%2C+CA+90012%2C+USA!5e0!3m2!1sen!2sbd!4v1563866499894!5m2!1sen!2sbd" width={600} height={450} allowFullScreen />
                    </div>
                    {/* End of .axil-map-wrapper */}
                </div>
                {/* End of .container */}
            </div>
            <FooterOne />
        </>
    );
}

export default ContactPage;





