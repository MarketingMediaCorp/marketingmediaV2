import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutThirteen = ({data, postSizeMd, postBgDark}) => {

  return (
    <>
      <div className={`media post-block m-b-xs-80 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg": "" }`}>
         
            <Link href={`/${slugify(data.node.categories.edges[0].node.name)}/${slugify(data.node.slug)}`}>
                <a className="align-self-center border border-5 rounded shadow-lg p-3 mb-5 border-primary">
                <Image
                src={data.node.featuredImage.node.sourceUrl}
                alt={data.node.featuredImage.node.altText}
                width={postSizeMd === true ? 285 : 150}
                height={postSizeMd === true ? 285 : 150}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                className="shadow-lg p-3 mb-5"
                />
                </a>
            </Link>
            
         <div className="media-body m-5">
           <div className="post-cat-group m-b-xs-10">
            <Link href={`/${slugify(data.node.categories.edges[0].node.slug)}`}>
                <a className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.node.categories.edges[0].node.name}</a>
            </Link>
           </div>
           <h3 className="axil-post-title hover-line hover-line" style={{color:"black"}}>
                <Link href={`/${slugify(data.node.categories.edges[0].node.slug)}/${slugify(data.node.slug)}`}>
                    <a>{data.node.title}</a>
                </Link>
            </h3>
          
      {postSizeMd === true ? 
			<div className="mid excer" dangerouslySetInnerHTML={{__html: data.node.excerpt }}  />

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
    <div className="progress m-5 m-b-xs-80" style={{width: "170% !important",height: "2px"}}>
              <div className="progress-bar" role="progressbar" style={{ width : "24%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </>
  );
};

export default PostLayoutThirteen;
