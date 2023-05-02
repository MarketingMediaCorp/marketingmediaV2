import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";

const MetaDataOne = ({metaData}) => {
    return (
      <div className="banner banner__single-post banner__standard">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="post-title-wrapper">
                <div className="btn-group">
                    <Link href={`/category/${slugify(metaData.cate)}`}>
                        <a className={`cat-btn ${metaData.cate_bg ?? "bg-color-blue-one"}`}>{metaData.cate}</a>
                    </Link>
                </div>
                <h2 className="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">{metaData.title}</h2>
                <div className="post-metas banner-post-metas m-t-xs-20">
                  <ul className="list-inline">
                    <li>
                        <Link href={`/author/${slugify(metaData.author_name)}`}>
                            <a className="post-author post-author-with-img">
                                <Image 
                                    src={metaData.author_img}
                                    alt={metaData.author_name}
                                    width={30}
                                    height={30}
                                />
                                <span className="author-name">{metaData.author_name}</span>
                                
                            </a>
                        </Link>
                    </li>
                    <li>
                        <i className="feather icon-activity" />
                        {metaData.post_views}
                    </li>
                    <li>
                        <i className="feather icon-share-2" />
                        {metaData.post_share}
                    </li>
                  </ul>
                </div>
                {/* End of .post-metas */}
              </div>
              {/* End of .post-title-wrapper */}
            </div>
            {/* End of .col-lg-6 */}
            <div className="col-lg-6">
                <div className="post-main-thumbnail">
                    <Image 
                    src={metaData.featureImg}
                    alt={metaData.title}
                    width={540}
                    height={540}
                    className="img-fluid"
                    />
                </div>
            </div>
          </div>
          {/* End of .row */}
        </div>
        {/* End of .container */}
      </div>
    );
}
 
export default MetaDataOne;