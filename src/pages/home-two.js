import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderTwo from "../components/header/HeaderTwo";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionSeven from "../components/post/PostSectionSeven";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import SliderOne from "../components/slider/SliderOne";

const HomeTwo = ({allPosts}) => {

  return ( 
    <>
    <HeadMeta metaTitle="Home Two"/>
    <HeaderTwo />
    <SliderOne slidePost={allPosts} />
    
    <FooterOne />
    </>
   );
}
 
export default HomeTwo;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'postFormat',
    'story',
    'trending',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'author_img',
    'date',
    'post_views',
    'post_share',
  ])
  
  return {
    props: { allPosts }
  }
}

