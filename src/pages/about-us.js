import Image from "next/image";
import { getFileContentBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import TeamOne from "../components/team/TeamOne";
import WidgetNewsletter from "../components/widget/WidgetNewsletter";
import WidgetPost from "../components/widget/WidgetPost";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import { removeDuplicates } from "../utils";

const AboutUs = ({ aboutData, allPosts }) => {

    const AuthorList = removeDuplicates(allPosts, 'author_name');

    return (
        <>
            <HeadMeta metaTitle="About Us" />
            <HeaderOne />
            <Breadcrumb aPage="About Us" />
            <BreadcrumbBanner pageTitle="About Us" />
            <div className="axil-about-us section-gap-top p-b-xs-20">
                <div className="container">
                    <figure className="m-b-xs-40">
                        <Image
                            src={aboutData.data.featuredImg}
                            height={451}
                            width={1110}
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
                                <WidgetNewsletter />
                                <WidgetSocialShare />
                                <WidgetPost dataPost={allPosts} />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="axil-our-team section-gap section-gap-top__with-text bg-grey-light-three">
                <div className="container">
                    <div className="axil-team-grid-wrapper">
                        <SectionTitleTwo title="Meet Our Publishing Authors" paragraph="Wherever &amp; whenever you need us. We are here for you - contact us for all your support needs, <br> be it technical, general queries or information support." />
                        <div className="row">
                            {AuthorList.slice(0, 6).map((data) => (
                                <div className="col-lg-4" key={data.slug}>
                                   <TeamOne data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
}

export default AboutUs;


export async function getStaticProps() {

    const allPosts = getAllPosts([
        'slug',
        'title',
        'featureImg',
        'cate',
        'cate_bg',
        'author_name',
        'author_img',
        'author_desg',
        'author_social'
    ])

    const aboutData = getFileContentBySlug('AboutData', 'src/data/about')
    const content = await markdownToHtml(aboutData.content || "")
    return {
        props: {
            aboutData: {
                ...aboutData,
                content
            },
            allPosts
        }
    }
}





