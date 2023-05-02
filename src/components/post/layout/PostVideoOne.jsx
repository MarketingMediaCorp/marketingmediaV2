import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostVideoOne = ({data}) => {
  return (
    <div className="axil-img-container flex-height-container">
        <Link href={`/post/${data.slug}`}>
        <a className="d-block h-100">
            <Image
                src={data.featureImg}
                alt={data.title}
                width={730}
                height={514}
                className="w-100"
            />
            <div className="grad-overlay grad-overlay__transparent" />
            <div className="video-popup video-play-btn video-play-btn__big" />
        </a>
      </Link>
      <div className="media post-block grad-overlay__transparent position-absolute m-b-xs-30">
        <div className="media-body media-body__big">
          <div className="axil-media-bottom mt-auto">
            <h3 className="axil-post-title hover-line hover-line">
                <Link href={`/post/${data.slug}`}>
                    <a>{data.title}</a>
                </Link>
            </h3>
            <div className="post-metas">
              <ul className="list-inline">
                <li>
                    <span>By</span>
					<Link href={`/author/${slugify(data.author_name)}`}>
					<a className="post-author">{data.author_name}</a>
					</Link>
                </li>
                <li>
                  <i className="dot">.</i>{data.date}
                </li>
                <li>
                    <i className="feather icon-activity" />
                    {data.post_views}
                </li>
                <li>
                    <i className="feather icon-share-2" />
                    {data.post_share}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End of .media-body */}
      </div>
      {/* End of .post-block */}
    </div>
  );
};

export default PostVideoOne;
