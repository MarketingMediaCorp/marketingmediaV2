import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderFive from "../../components/header/HeaderFive";
import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";
import {getAllPostsWithSlug,getPSinglePost} from "../../../lib/api2";


const PostDetails = ({postContent}) => {

	const postData = postContent.single
	const data = postData.edges[0]

    return ( 
        <>
		<HeadMeta metaTitle={data.node.title}/>
        <HeaderFive />
        <Breadcrumb bCat={data.node.categories.edges[0].node.slug} aPage={data.node.title}/>
		<PostFormatStandard  postData={data} />
        <FooterTwo />
        </>
     );
}
 
export default PostDetails;

export async function getStaticProps({ params }) {

	const {category,slug} = params;

	const single = await getPSinglePost(slug,category)
	


    return {
        props: {
            postContent : {
                single
            }
           
        }
    }
}

export async function getStaticPaths() {
	const allPostsWithSlug = await getAllPostsWithSlug()
	const allData = allPostsWithSlug.edges
	
	const paths = allData.map(post => ({
        params: {
			category: post.node.categories.edges[0].node.slug,
            slug: post.node.slug
			
			
		}
	}))
	
	return {
		paths,
		fallback: false,
	}
}
