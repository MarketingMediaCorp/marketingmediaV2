import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import { GetStaticProps } from 'next'
import HeaderFive from "../components/header/HeaderFive";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionTwo from "../components/post/PostSectionTwo";

import {  getAllPostsForHome , getFeaturedPostsForHome , getEditorChoice, getGlobalNews,getRecentModification} from '../../lib/api2'


const HomeOne = ({EditorChoice,featuredPosts,GlobalProp, HomePost, Recent}) => {
 const Featured = featuredPosts.edges
 const GlobalPropTech = GlobalProp.edges
 const MoreStories = HomePost.edges
 const RecentStories = Recent.edges


  return ( 
    <>
    <HeadMeta metaTitle="Marketing Media" metadescription={null}/>
    <HeaderFive />
    <PostSectionOne EditorChoice={EditorChoice} GlobalPropTech={GlobalPropTech} />
    <PostSectionTwo featured={Featured}/>
    <PostSectionFive  pClass={null} MoreStories={MoreStories} Recent={RecentStories}/>
    <FooterTwo />
    </>
   );
}
 
export default HomeOne;



export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const HomePost = await getAllPostsForHome(preview)
  const featuredPosts = await getFeaturedPostsForHome(preview)
  const EditorChoice = await getEditorChoice(preview)
  const GlobalProp = await getGlobalNews(preview)
  const Recent = await getRecentModification(preview)


  return {
    props: { HomePost, preview,featuredPosts,EditorChoice, GlobalProp,Recent },
    revalidate: 10,
  }
}

