import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";

const MetaDataThree = ({ metaData }) => {

	const postDate = metaData.date.split(" ");
	
  return (
    <div className="banner banner__default bg-grey-light-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="post-date perfect-square bg-primary-color" style={{height:"160px"}}>
				{postDate[0]}
               <span>{postDate[1]}</span>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="post-title-wrapper">
              <div className="btn-group">
			  		<Link href={`/category/${slugify(metaData.cate)}`}>
                        <a className={`cat-btn ${metaData.cate_bg ?? "bg-color-blue-one"}`}>{metaData.cate}</a>
                    </Link>
              </div>
              <h2 className="m-b-xs-0 m-t-xs-10 axil-title hover-line">
                {metaData.title}
              </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaDataThree;
