import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderFour from "../components/header/HeaderFour";
import PostSectionSix from "../components/post/PostSectionEight";
import SliderThree from "../components/slider/SliderThree";

const HomeFour = ({allPosts}) => {

  return ( 
    <>
    <HeadMeta metaTitle="Home Four"/>
    <HeaderFour />
    <SliderThree postData={allPosts} />
    <FooterTwo />
    </>
   );
}
 
export default HomeFour;


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
    'date',
    'post_views',
    'post_share',
  ])
  
  return {
    props: { allPosts }
  }
}

