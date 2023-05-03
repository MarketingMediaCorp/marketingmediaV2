import Image from "next/image";
import { getFileContentBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderFive from "../components/header/HeaderFive";
import TeamOne from "../components/team/TeamOne";
import WidgetNewsletter from "../components/widget/WidgetNewsletter";
import WidgetPost from "../components/widget/WidgetPost";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import { removeDuplicates } from "../utils";

const AboutUs = ({ aboutData, allPosts }) => {


    return (
        <>
            <HeadMeta metaTitle="About Us" />
            <HeaderFive />
            <Breadcrumb aPage="About Us" />
            <BreadcrumbBanner pageTitle="About Us" />
            <div className="axil-about-us section-gap-top p-b-xs-20">
                <div className="container">
                    <figure className="m-b-xs-40">
                        <Image
                            src={aboutData.data.featuredImg}
                            height={150}
                            width={150}
                            alt="about us"
                            className="img-fluid mx-auto"
                        />
                    </figure>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="about-us-content">
                                <div dangerouslySetInnerHTML={{ __html: aboutData.content }}></div>
                            </div>
                        </div>
                        {/* End of .col-lg-8 */}
                        <div className="col-lg-4">
                            <aside className="post-sidebar">
                                {/*<WidgetNewsletter />*/}
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
         
            <FooterTwo />
        </>
    );
}

export default AboutUs;


export async function getStaticProps() {

   

    const aboutData = getFileContentBySlug('AboutData', 'src/data/about')
    const content = await markdownToHtml(aboutData.content || "")
    return {
        props: {
            aboutData: {
                ...aboutData,
                content
            }
        }
    }
}





