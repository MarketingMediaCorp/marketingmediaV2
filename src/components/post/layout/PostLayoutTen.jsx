import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutTen = ({data, postSizeMd, postBgDark}) => {
  

  return (
    <div className={`media post-block m-b-xs-30 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg": "" }`}>
   
      <Link href={`${slugify(data.node.categories.edges[0].node.slug)}/${data.node.slug}`}>
          <a className="align-self-center">
          <Image
          src={data.node.featuredImage.node.sourceUrl}
          alt={data.node.featuredImage.node.altText}
          width={postSizeMd === true ? 285 : 150}
          height={postSizeMd === true ? 285 : 150}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          />
          </a>
      </Link>
   <div className="media-body">
     <div className="post-cat-group m-b-xs-10">
      <Link href={`/${slugify(data.node.categories.edges[0].node.slug)}`}>
          <a className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.node.categories.edges[0].node.name}</a>
      </Link>
     </div>
     <h3 className="axil-post-title hover-line hover-line" style={{color:"black"}}>
          <Link href={`${slugify(data.node.categories.edges[0].node.slug)}/${data.node.slug}`}>
              <a>{data.node.title}</a>
          </Link>
      </h3>
     {postSizeMd === true ? 
      <p className="mid">{data.node.excerpt}</p>

      : ""
      }
     <div className="post-metas">
       <ul className="list-inline">
         <li>
              <span>By {data.node.author.node.name}</span> 
         </li>
       </ul>
     </div>
   </div>
  </div>
);
};

export default PostLayoutTen;
