import WidgetAd from "../../widget/WidgetAd";
import WidgetInstagram from "../../widget/WidgetInstagram";
import WidgetNewsletter from "../../widget/WidgetNewsletter";
import WidgetPost from "../../widget/WidgetPost";
import WidgetSocialShare from "../../widget/WidgetSocialShare";
import MetaDataTwo from "./elements/meta/MetaDataTwo";
import PostAuthor from "./elements/PostAuthor";
import PostComment from "./elements/PostComment";
import SocialShareBottom from "./elements/SocialShareBottom";
import SocialShareSide from "./elements/SocialShareSide";

const PostFormatVideo = ({ postData, allData }) => {
  const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
  
  const postContent = postData.content.replaceAll('/images/', basePathLink + '/images/');
  return (
    <>
      <MetaDataTwo metaData={postData} allPost={allData} />
      <div className="post-single-wrapper p-t-xs-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                    <SocialShareSide />
                    <figure className="post-media">
                      <video className="plyr-post" id="video-player-1" playsInline controls >
                        <source
                          src={basePathLink + postData.videoLink}
                          type="video/mp4"
                        />
                      </video>
                    </figure>
                    <div
                      dangerouslySetInnerHTML={{ __html: postContent }}
                    ></div>
                  </div>
                </article>
                <SocialShareBottom />
                <hr className="m-t-xs-50 m-b-xs-60" />
                <PostAuthor authorData={postData} />
                <PostComment />
              </main>
            </div>
            <div className="col-lg-4">
              <div className="post-sidebar">
                <WidgetAd />
                <WidgetNewsletter />
                <WidgetSocialShare />
                <WidgetPost dataPost={allData} />
                <WidgetInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatVideo;
