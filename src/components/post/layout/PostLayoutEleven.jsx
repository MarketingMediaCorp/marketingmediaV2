import Image from "next/image";
import Link from "next/link";
//import {  } from "../../../utils";
import { slugify } from "../../../utils";


const PostLayoutEleven = ({ data, postSizeLg, pClass, videoPost }) => {
	const datee = data.node.date.split('T')
    const dateFormatted = datee[0].toString()
    const d = new Date(dateFormatted)
    const options = {day:'2-digit',month:'long',year:'numeric'}
    const formattedDate = d.toLocaleDateString('en-US',options)
	
  return (
	<div className={`axil-img-container ${pClass ?? "m-b-xs-30"}`}>
		<Link href={`/${slugify(data.node.categories.edges[0].node.slug)}/${data.node.slug}`}>
			<a className={`d-block ${videoPost === true ? "h-100" : ""}`}>
				<Image
					src={data.node.featuredImage.node.sourceUrl}
					alt={data.node.title}
					width={postSizeLg === true? 730 : 350}
					height={postSizeLg === true? 550 : 260}
					className="w-100"
				/>
				<div className={`grad-overlay ${videoPost === true ? "grad-overlay__transparent" : ""}`} />
			</a>
		</Link>
		<div className="media post-block position-absolute">
		<div className={`media-body ${postSizeLg === true ? "media-body__big" : "" }`}>
			<div className="post-cat-group m-b-xs-10">
			<Link href={`/${slugify(data.node.categories.edges[0].node.slug)}`}>
				<a className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.node.categories.edges[0].node.name}</a>
			</Link>
			</div>
			<div className="axil-media-bottom">
			<h3 className="axil-post-title hover-line hover-line">
				<Link href={`/${slugify(data.node.categories.edges[0].node.slug)}/${data.node.slug}`}>
					<a>{data.node.title}</a>
				</Link>
			</h3>
			<div className="post-metas">
				<ul className="list-inline">
				<li>
				<Link href={`/about-us`}>
                    <a className="post-author">{data.node.author.node.name}</a>
                </Link>
				</li>
				{postSizeLg === true ?
				<>
					<li>
					<i className="dot"> .</i>{formattedDate}
					</li>
					<li>
						<i className="feather icon-activity" />
						{data.post_views ?? '-'}
					</li>
					<li>
						<i className="feather icon-share-2" />
						{data.post_share ?? '-'}
					</li>
				</> 
				: "" }
				</ul>
			</div>
			</div>
		</div>
		</div>
		{/* End of .post-block */}
	</div>
  );
};

export default PostLayoutEleven;
