import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import { GetStaticProps } from 'next'
import HeaderFive from "../components/header/HeaderFive";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionFour from "../components/post/PostSectionFour";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import PostSectionTwo from "../components/post/PostSectionTwo";
import { CMS_NAME } from '../../lib/constants';

import { getPreviewPost, getAllPostsForHome , getFeaturedPostsForHome , getEditorChoice, getGlobalNews,getRecentModification} from '../../lib/api2'


const HomeOne = ({allPosts,EditorChoice,featuredPosts,GlobalProp, HomePost, Recent}) => {
 const Featured = featuredPosts.edges
 const GlobalPropTech = GlobalProp.edges
 const MoreStories = HomePost.edges
 const RecentStories = Recent.edges
  return ( 
    <>
    <HeadMeta metaTitle="Marketing Media"/>
    <HeaderFive />
    <PostSectionOne postData={allPosts} EditorChoice={EditorChoice} GlobalPropTech={GlobalPropTech} />
    <PostSectionTwo postData={allPosts} featured={Featured}/>
    <PostSectionFive postData={allPosts} adBanner={false} pClass={null} MoreStories={MoreStories} Recent={RecentStories}/>
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
  
  const allPosts = getAllPosts([
    'postFormat',
    'trending',
    'story',
    'slug',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'date',
    'post_views',
    'post_share',
  ])

  return {
    props: { HomePost, preview,featuredPosts,EditorChoice,allPosts, GlobalProp,Recent },
    revalidate: 10,
  }
}

