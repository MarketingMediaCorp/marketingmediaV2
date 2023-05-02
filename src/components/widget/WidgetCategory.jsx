import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import { slugify } from "../../utils";

const WidgetCategory = ({ cateData }) => {



const categories = cateData.map(data => {
	const obj = {
		name: data.cate,
		thumb: data.cate_img
	}
	return obj;
});

const category = categories.reduce((prev, curr) => {
	prev[curr.name] = (prev[curr.name] || 0) + 1
	return prev;
}, {})

var cateList = Object.keys(category).map(cateTitle => {
	const imgGet =  categories.filter(post => post.name === cateTitle);
	
	return {
		name: cateTitle, 
		slug: slugify(cateTitle),
		count: category[cateTitle],
		cateImg: imgGet[0].thumb
	}; 
});

const slideSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
};

const CustomNavRef = useRef(null);

return (
    <div className="category-widget m-b-xs-40">
      <div className="widget-title">
        <h3>Categories</h3>
        <div className="owl-nav">
          <button className="custom-owl-prev" onClick={() => CustomNavRef?.current?.slickPrev()}>
            <i className="feather icon-chevron-left" />
          </button>
          <button className="custom-owl-next" onClick={() => CustomNavRef?.current?.slickNext()}>
            <i className="feather icon-chevron-right" />
          </button>
        </div>
      </div>
      <div className="category-carousel">
        <Slider ref={CustomNavRef} {...slideSettings}>
			<div className="cat-carousel-inner">
				<ul className="category-list-wrapper">
					{cateList.slice(0, 4).map((data) => (
					<li className="category-list perfect-square" key={data.slug}>
						<Link href={`/category/${data.slug}`}>
						<a className="list-inner">
							<Image
							alt={data.name}
							width={155}
							height={190}
							/> 
							<div className="post-info-wrapper overlay">
							<div className="counter-inner">
								<span className="counter">{data.count}</span>+
							</div>
							<h4 className="cat-title">{data.name}</h4>
							</div>
						</a>
						</Link>
					</li>
					))}
				</ul>
			</div>
			<div className="cat-carousel-inner">
				<ul className="category-list-wrapper">
					{cateList.slice(5, 9).map((data) => (
					<li className="category-list perfect-square" key={data.slug}>
						<Link href={`/category/${data.slug}`}>
						<a className="list-inner">
							<Image
							src={data.cateImg}
							alt={data.name}
							width={155}
							height={190}
							/> 
							<div className="post-info-wrapper overlay">
							<div className="counter-inner">
								<span className="counter">{data.count}</span>+
							</div>
							<h4 className="cat-title">{data.name}</h4>
							</div>
						</a>
						</Link>
					</li>
					))}
				</ul>
			</div>
			<div className="cat-carousel-inner">
				<ul className="category-list-wrapper">
					{cateList.slice(10, 14).map((data) => (
					<li className="category-list perfect-square" key={data.slug}>
						<Link href={`/category/${data.slug}`}>
						<a className="list-inner">
							<Image
							src={data.cateImg}
							alt={data.name}
							width={155}
							height={190}
							/> 
							<div className="post-info-wrapper overlay">
							<div className="counter-inner">
								<span className="counter">{data.count}</span>+
							</div>
							<h4 className="cat-title">{data.name}</h4>
							</div>
						</a>
						</Link>
					</li>
					))}
				</ul>
			</div>
        </Slider>
      </div>
    </div>
  );
};

export default WidgetCategory;
