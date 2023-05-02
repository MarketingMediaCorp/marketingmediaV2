import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { slugify } from "../../utils";

const SliderThree = ({ postData }) => {
  const postContainerRef = useRef();

  const ClickScrollDown = () => {
    postContainerRef.current.scrollTop += 200;
  };
  const ClickScrollUp = () => {
    postContainerRef.current.scrollTop -= 200;
  };

  useEffect(() => {
    setTimeout(() => {
      let elmSelector = document.querySelectorAll(".load-anim");
      let loadStyle = `opacity: 1; top: 0px;`;
      for (let i = 0; i < elmSelector.length; i++) {
        const element = elmSelector[i];
        element.style = loadStyle;
      }
    }, 100);
  }, []);

  const firstPost = postData[0];

  return (
    <div className="banner banner-home__with-post">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-8">
            <div
              className="banner-left-content load-anim-wrapper"
              style={{
                backgroundImage:
                  "url('images/others/home-with-post-banner.jpg')",
              }}
            >
              <div className="post-title-wrapper">
                <div className="post-metas banner-post-metas post-meta-primary load-anim">
                  <ul className="list-inline">
                    <li>
                      <span>By</span>
                      <Link href={`/author/${slugify(firstPost.author_name)}`}>
                        <a className="post-author">{firstPost.author_name}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End of .post-metas */}
                <h2 className="m-t-xs-20 m-b-xs-10 axil-post-title hover-line color-white txt-shadow  load-anim">
                  <Link href={`/post/${firstPost.slug}`}>
                    <a>{firstPost.title}</a>
                  </Link>
                </h2>
                <p className="big color-white m-b-xs-20 m-b-sm-40 load-anim">
                  {firstPost.excerpt}
                </p>
                <div className="load-anim">
                  <Link href={`/post/${firstPost.slug}`}>
                    <a className="btn btn-primary">READ MORE</a>
                  </Link>
                </div>
              </div>
              {/* End of .post-title-wrapper */}
            </div>
          </div>
          {/* End of  .col-lg-9 */}
          <div className="col-lg-4">
            <div className="axil-banner-sidebar load-anim-wrapper">
              <div
                className="axil-banner-sidebar-media-wrapper nicescroll-container"
                ref={postContainerRef}
              >
                {postData.slice(1, 8).map((data) => (
                  <div
                    className="media post-block post-block__mid m-b-xs-30 load-anim"
                    key={data.slug}
                  >
                    <div className="media-body">
                      <h3 className="axil-post-title hover-line">
                        <Link href={`/post/${data.slug}`}>
                          <a>{data.title}</a>
                        </Link>
                      </h3>
                      <p className="mid">{data.excerpt}</p>
                    </div>
                  </div>
                ))}

                {/* End of .media */}
                <div className="axil-scroll-up-down">
                  <button
                    className="axil-post-scroll-down"
                    onClick={ClickScrollDown}
                  ></button>
                  <button
                    className="axil-post-scroll-up"
                    onClick={ClickScrollUp}
                  ></button>
                </div>
              </div>
              {/* End of .axil-banner-sidebar-media-wrapper */}
              <div className="banner-social-share-wrapper">
                <ul className="social-share social-share__with-bg social-share__square social-share__vertical">
                  <li>
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* End of .banner-social-share-wrapper */}
            </div>
            {/* End of .axil-banner-sidebar */}
          </div>
          {/* End of .col-lg-3 */}
        </div>
        {/* End of .row */}
      </div>
      {/* End of .container-fluid */}
    </div>
  );
};

export default SliderThree;
