import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import { GetStaticProps } from 'next'
import HeaderFive from "../components/header/HeaderFive";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionTwo from "../components/post/PostSectionTwo";
import PostSectionRecent from "../components/post/PostSectionRecent"
import {useRouter} from "next/router"
import {  getAllPostsForHome , getFeaturedPostsForHome , getEditorChoice, getGlobalNews,getRecentModification} from '../../lib/api2'
import { DOMAIN } from "../../lib/constants";
import StructuredData from "../components/post/StructuredData";


const HomeOne = ({EditorChoice,featuredPosts,GlobalProp, HomePost, Recent}) => {
 const Featured = featuredPosts.edges
 const GlobalPropTech = GlobalProp.edges
 const MoreStories = HomePost.edges
 const RecentStories = Recent.edges

 const structureCoData = 
 {
     "@context": "https://schema.org",
     "@type": "Organization",
     "url": DOMAIN,
     "logo": `${DOMAIN}/favicon/safari-pinned-tab.svg`
 }
 const structuredData = [structureCoData]

 const router = useRouter()

  return ( 
    <>
    <HeadMeta metaTitle="Marketing Media | Real Estate Meets Tech" metadescription={null} slug={router.asPath} image={null}/>
    <StructuredData data = {structuredData}/>

    <HeaderFive />
    <PostSectionOne EditorChoice={EditorChoice} GlobalPropTech={GlobalPropTech} />
    <PostSectionTwo featured={Featured}/>
    <PostSectionRecent featured={RecentStories}/>
    <FooterTwo />
    </>
   );
}
 
export default HomeOne;



export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const HomePost = await getAllPostsForHome("home-electronics")
  const featuredPosts = await getFeaturedPostsForHome(preview)
  const EditorChoice = await getEditorChoice(preview)
  const GlobalProp = await getGlobalNews(preview)
  const Recent = await getRecentModification(preview)


  return {
    props: { HomePost, preview,featuredPosts,EditorChoice, GlobalProp,Recent },
    revalidate: 10,
  }
}

