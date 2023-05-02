import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderFive from "../../components/header/HeaderFive";

import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";
import {getAllPostsWithSlug} from "../../../lib/api2"


const PostDetails = ({postContent}) => {

	const postData = postContent.getData[0]
    return ( 
        <>
		<HeadMeta metaTitle={postData.node.title}/>
        <HeaderFive />
        <Breadcrumb bCat={postData.node.categories.edges[0].node.name} aPage={postData.node.title}/>
		<PostFormatStandard  postData={postData} />
        <FooterTwo />
        </>
     );
}
 
export default PostDetails;

export async function getStaticProps({ params }) {
   

	const allPostsWithSlug = await getAllPostsWithSlug()
	const allData = allPostsWithSlug.edges
	
	
	const getData = allData.filter(post =>
		post.node.slug === params.slug
	)



    return {
        props: {
            postContent : {
                getData
            }
           
        }
    }
}

export async function getStaticPaths() {
	const allPostsWithSlug = await getAllPostsWithSlug()
	const allData = allPostsWithSlug.edges
	
	const paths = allData.map(post => ({
        params: {
            slug: post.node.slug
			
		}
	}))


	return {
		paths,
		fallback: false,
	}
}
