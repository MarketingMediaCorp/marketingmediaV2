
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderFive from "../components/header/HeaderFive";
import TeamOne from "../components/team/team";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";
import {useRouter} from "next/router"
import { getAboutPage } from "../../lib/api2"

const AboutUs = ({ aboutData }) => {

    const AuthorList = [
        {
            author_name: "Matthew Manning",
            author_img: "/images/author/author1.png",
            author_desg: "Founder and Software Engineer"

        }
    ]

    const router = useRouter()
    return (
        <>
            <HeadMeta metaTitle="About Marketing Media" slug={router.asPath}/>
        
            <HeaderFive />
            <Breadcrumb aPage="About Marketing Media" />
            <BreadcrumbBanner pageTitle="About Marketing Media" />
            <div className="axil-about-us section-gap-top p-b-xs-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="about-us-content">
                                <div dangerouslySetInnerHTML={{ __html: aboutData.aboutData.content }}></div>
                            </div>
                        </div>
                        {/* End of .col-lg-8 */}
                        <div className="col-lg-4">
                            <aside className="post-sidebar">
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="axil-our-team section-gap section-gap-top__with-text bg-grey-light-three">
                <div className="container ">
                    <div className="axil-team-grid-wrapper">
                        <SectionTitleTwo title="Meet Our Founder"  />
                        <div className="row d-flex justify-content-center mt-5">
                            {AuthorList.slice(0,1).map((data) => (
                                <div className="col-lg-4" key={data.slug}>
                                   <TeamOne data={data} />
                                </div>
                            ))}
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

   

    const aboutData = await getAboutPage("about-marketing-media")
    return {
        props: {
            aboutData: {
                aboutData
            }
        }
    }
}





