import { getAllPosts } from "../../lib/api";
import CategoryOne from "../components/category/CategoryOne";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderThree from "../components/header/HeaderThree";
import PostSectionFive from "../components/post/PostSectionFive";
import SliderTwo from "../components/slider/SliderTwo";

const HomeThree = ({allPosts}) => {

  return ( 
    <>
    <HeadMeta metaTitle="Home Three"/>
    <HeaderThree />
    <SliderTwo slidePost={allPosts} />
    <FooterOne />
    </>
   );
}
 
export default HomeThree;


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

