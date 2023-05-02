import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import HeaderFive from "../components/header/HeaderFive";
import PostLayoutSix from "../components/post/layout/PostLayoutSix";
import PostVideoThree from "../components/post/layout/PostVideoThree";
import Slider from 'react-slick';


const HomeFive = ({ allPosts }) => {

	const videoPost = allPosts.filter(post => post.postFormat === 'video');

	// Slick Slider Option
	function SlickNextArrow(props) {
		const { className, onClick } = props;
		return (
			<button className={className} onClick={onClick}>
			<i className="feather icon-chevron-right"></i>
			</button>
		);
	}
	
	function SlickPrevArrow(props) {
		const { className, onClick } = props;
		return (
			<button className={className} onClick={onClick}>
			<i className="feather icon-chevron-left"></i>
			</button>
		);
	}
	
	const slideSettings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		nextArrow: <SlickNextArrow />,
		prevArrow: <SlickPrevArrow />,
	};

	return (
		<div className="main-content fixed-top">
			<HeadMeta metaTitle="Home Five" />
			<HeaderFive />
			<div className="fluid-post-wrapper p-t-xs-15 p-t-sm-30">
				<div className="container-fluid p-l-md-30 p-r-md-30">
					<div className="row">
						<div className="col-xl-4 col-lg-6">
							<Slider {...slideSettings} className="axil-content axil-post-carousel">
								{videoPost.slice(0, 5).map((data) => (
									<div className="item" key={data.slug}>
										<PostVideoThree data={data} imgWidth={600} imgHeight={760} key={data.slug} />
									</div>
								))}
							</Slider>
						</div>
						<div className="col-xl-8 col-lg-6">
							<div className="y-scroll-container">
								<div className="row gutter-40">
									{allPosts.slice(0, 12).map((data) => (
										<div className="col-xl-4 col-sm-6" key={data.slug}>
											<PostLayoutSix data={data} />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeFive;


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

