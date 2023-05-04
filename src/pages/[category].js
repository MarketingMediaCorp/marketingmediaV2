import FooterTwo from "../components/footer/FooterTwo";
import HeaderFive from "../components/header/HeaderFive";
import Breadcrumb from "../components/common/Breadcrumb";
import { slugify } from "../utils";
import HeadMeta from "../components/elements/HeadMeta";
import { getSlugData } from "../../lib/api2";
import PostLayoutThirteen from "../components/post/layout/PostLayoutThirteen"
import {getListCategory} from "../../lib/api2"


const PostCategory = ({ postData}) => {
    const cateContent = postData.edges[0];

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
                       
                        <div className="axil-content">
                            {postData.edges.map((data) => (
                                <PostLayoutThirteen data={data} postSizeMd={true} key={data.slug}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-sidebar">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterTwo />
    </>)
}

export default PostCategory;


export async function getStaticProps({ params }) {

    const postParams = params.category;

    
    
 
    const postData = await getListCategory(postParams);

    return {
        props: {
            postData,
        }
    }
}

export async function getStaticPaths() {
    const postWithSlug = await getSlugData()
   
    const paths = postWithSlug.edges.map(post => ({
        params: {
            category: slugify(post.node.categories.edges[0].node.slug)
        }
    }))

    return {
        paths,
        fallback: false,
    }
}