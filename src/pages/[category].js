import FooterTwo from "../components/footer/FooterTwo";
import HeaderFive from "../components/header/HeaderFive";
import Breadcrumb from "../components/common/Breadcrumb";
import HeadMeta from "../components/elements/HeadMeta";
import PostLayoutThirteen from "../components/post/layout/PostLayoutThirteen"
import {getListCategory} from "../../lib/api2"
import {useRouter} from  "next/router"
import { DOMAIN } from "../../lib/constants";
import StructuredData from "../components/post/StructuredData";






const PostCategory = ({ postData }) => {
    const cateContent = postData.edges[0];




    const router = useRouter();

    const structureCoData = 
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": DOMAIN,
        "logo": `${DOMAIN}/favicon/safari-pinned-tab.svg`
    }
    const structuredData = [structureCoData]

    const { category } = router.query;



    const handleNextClick = () => {
        router.push(`/${category}?after=${postData.pageInfo.endCursor}`);
      };

    const handlePreviousClick = () => {
        router.push(`/${category}?before=${postData.pageInfo.startCursor}`);

    }
   

    

    return ( <>
        <HeadMeta metaTitle={cateContent.node.categories.edges[0].node.name} slug={router.asPath}/>
        <StructuredData data = {structuredData}/>
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
                                <>
                                <PostLayoutThirteen data={data} postSizeMd={true} key={data.slug}/>
                                </>
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
        <nav aria-label="...">
            <ul className="pagination pagination-lg justify-content-between p-5">
            <li className="page-item bg-primary" aria-current="page">
                {postData.pageInfo.hasPreviousPage &&
                            <a
                            onClick={handlePreviousClick}
                                className="page-link display-1 bg-primary text-white p-4 fw-normal"
                            >
                            Prev
                            </a>
                        }
                </li>
                <li className="page-item pagination-lg" aria-current="page">
                    {postData.pageInfo.hasNextPage &&
                        <a
                           onClick={handleNextClick}
                            className="page-link display-1 bg-primary text-white p-4 fw-normal"
                        >
                        Next
                        </a>
                    }
                </li>
                
            </ul>
            
        </nav>    
        <FooterTwo />
    </>)
}

export default PostCategory;



export async function getServerSideProps({res , params, query }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=59'
    )


    const {category} = params;
    const { after, before } = query;
    let endCursor = '';
    let typeofPost ='nextPosts';

    if(before !== null){
        endCursor = before;
        typeofPost = 'previousPosts'
    }
    
    if(after !== null){
        endCursor = after;
        typeofPost = 'nextPosts'
    }

    const postData = await getListCategory(category, endCursor  , typeofPost );

    if (Array.isArray(postData.edges) && postData.edges.length === 0) {
        return {
          notFound: true,
        };
      }
      


    return {
        props: {
           postData,
           revalidate: 60,
        },
       
      };
}

