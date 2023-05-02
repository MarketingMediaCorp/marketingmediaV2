import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutOne = ({data}) => {
  return (
    <div className="axil-latest-post">
        <div className="media post-block m-b-xs-20">
            <figure className="fig-container">
                <Link href={`/post/${data.slug}`}>
                    <a>
                        <Image
                        src={data.featuredImage.node.sourceUrl}
                        alt={data.featuredImage.node.altText}
                        width={540}
                        height={540}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        />
                    </a>
                </Link>
            <div className="post-cat-group m-b-xs-10">
                <Link href={`/${data.categories.edges[0].node.slug}`}>
                    <a className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.categories.edges[0].node.name}</a>
                </Link>
            </div>
            </figure>
            <div className="media-body">
            <h3 className="axil-post-title hover-line hover-line">
                <Link href={`/post/${data.slug}`}>
                    <a>{data.title}</a>
                </Link>
            </h3>
            <div className="post-metas">
                <ul className="list-inline">
                <li>
                    <span>By</span>
                    <Link href={`/author/${slugify(data.author.node.name)}`}>
                    <a className="post-author">{data.author.node.name}</a>
                    </Link>
                </li>
                <li>
                    <i className="dot">.</i>{data.date}
                </li>
                <li>
                    <i className="feather icon-activity" />
                {data.post_views ?? "-"} 
                </li>
                {/*<li>
                    <i className="feather icon-share-2" />
                    {data.post_share ?? "-"}
                </li>*/}
                </ul>
            </div>
            </div>
        </div>
        {/* End of .post-block */}
    </div>
  );
};

export default PostLayoutOne;
