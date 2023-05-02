import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import { slugify } from "../../utils";


const SliderOne = ({slidePost}) => {

    function SlickNextArrow(props) {
        const { className, onClick } = props;
        return (
          <button
            className={className}
            onClick={onClick}
          >
            <i className="feather icon-chevron-right"></i>
          </button>
        );
    }
    
    function SlickPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button
            className={className}
            onClick={onClick}
            >
            <i className="feather icon-chevron-left"></i>
            </button>
        );
    }

    const slideSettingsContent = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    };

    const slideSettingsImage = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
        
    };

    const slideSettingsShare = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        vertical: true,
    };

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [nav3, setNav3] = useState();

    // Social Share Toggle
    const ShareToggler = (e) => {
        const targeElm = e.target.nextElementSibling;
        targeElm.classList.toggle('show-shares')
    }


  return (
    <div className="banner banner__home-with-slider banner__home-with-slider-one section-gap-bottom">
      <div className="banner__home-with-slider-overlay"></div>
      {/* End of .banner__home-with-slider-overlay */}
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="banner-slider-container">
                <Slider asNavFor={nav2} ref={(slider1 => setNav1(slider1))} {...slideSettingsContent} className="slick-slider-for slick-synced">
                    {slidePost.slice(0, 3).map((data) =>(
                        <div className="item" key={data.slug}>
                            <div className="post-metas home-banner-post-metas m-b-xs-20">
                                <ul className="list-inline">
                                    <li className="m-r-xs-20">
                                        <Link href={`/author/${slugify(data.author_name)}`}>
                                            <a  className="d-flex align-items-center">
                                                <Image
                                                src={data.author_img}
                                                alt={data.author_name}
                                                width={50}
                                                height={50}
                                                />
                                                <span className="m-l-xs-20">{data.author_name}</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        {/* End of .post-metas */}
                        <h1 className="page-title m-b-xs-40 hover-line">
                            <Link href={`/post/${data.slug}`}>
                                <a>{data.title}</a>
                            </Link>
                        </h1>
                        <div className="btn-group">
                            <Link href={`/post/${data.slug}`}>
                                <a className="btn btn-primary m-r-xs-30">READ MORE</a>
                            </Link>
                            <Link href={`/category/${slugify(data.cate)}`}>
                                <a className="btn-link">ALL CURRENT NEWS</a>
                            </Link>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
          </div>
        </div>
        <div className="banner-slider-container-synced">
            <Slider asNavFor={nav3} ref={(slider2 => setNav2(slider2))} {...slideSettingsImage} className="slick-slider-nav slick-synced">
                {slidePost.slice(0, 3).map((data) =>(
                    <div className="item" key={data.slug}>
                        <Image
                            src={data.featureImg}
                            alt={data.title}
                            width={960}
                            height={600}
                        />
                    </div>
                ))}
            </Slider>
            <div className="banner-share-slider-container">
                <Slider asNavFor={nav1} ref={(slider3 => setNav3(slider3))} {...slideSettingsShare} className="banner-share-slider">
                    {slidePost.slice(0, 3).map((data) =>(
                        <div className="item" key={data.slug}>
                            <div className="banner-shares slick-banner-shares">
                                <div className="toggle-shares" onClick={ShareToggler}>
                                    Shares <span>+</span>
                                </div>
                                <div className="social-share-wrapper">
                                    <ul className="social-share social-share__with-bg">
                                    <li>
                                        <a href="#">
                                        <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fab fa-behance" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
