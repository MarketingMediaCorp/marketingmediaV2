import { getAllPosts } from "../../../lib/api";
import FooterOne from "../../components/footer/FooterOne";
import HeaderFive from "../../components/header/HeaderFive";
import Breadcrumb from "../../components/common/Breadcrumb";
import { slugify } from "../../utils";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import WidgetAd from "../../components/widget/WidgetAd";
import WidgetSocialShare from "../../components/widget/WidgetSocialShare";
import WidgetPost from "../../components/widget/WidgetPost";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import WidgetCategory from "../../components/widget/WidgetCategory";
import { getPreviewCategorySlug,getSlugData } from "../../../lib/api2";


const PostCategory = ({ postData, postParams }) => {
    const cateContent = postData[0];
    console.log(postParams)

    return ( <>
        <HeadMeta metaTitle={cateContent.node.categories.edges[0].node.name}/>
        <HeaderFive />
        <Breadcrumb aPage={cateContent.node.categories.edges[0].node.name} />
        {/* Banner Start here  */}
        <div className="banner banner__default bg-grey-light-three">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="post-title-wrapper">
                            <h2 className="m-b-xs-0 axil-post-title hover-line">{cateContent.node.categories.edges[0].node.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner End here  */}
        <div className="random-posts section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {/*<AdBanner />*/}
                        <div className="axil-content">
                            {postData.map((data) => (
                                <PostLayoutTwo data={data} postSizeMd={true} key={data.slug}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-sidebar">
                            {/*<WidgetAd />
                           
                            <WidgetAd img="/images/clientbanner/clientbanner3.jpg" height={492} width={320}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterOne />
    </>)
}

export default PostCategory;


export async function getStaticProps({ params }) {

    const postParams = params.slug;

    const allPosts = await getPreviewCategorySlug()
    

    const getCategoryData = allPosts.edges.filter(post => slugify(post.node.categories.edges[0].node.slug) === postParams);
    const postData = getCategoryData;
    console.log(postData)

    return {
        props: {
            postData,
            postParams
        }
    }
}

export async function getStaticPaths() {
    const postWithSlug = await getSlugData()
   
    const paths = postWithSlug.edges.map(post => ({
        params: {
            slug: slugify(post.node.categories.edges[0].node.slug)
        }
    }))
    console.log(paths)

    return {
        paths,
        fallback: false,
    }
}