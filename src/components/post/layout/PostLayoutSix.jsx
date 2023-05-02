import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutSix = ({data}) => {
  return (
	<div className="axil-img-container m-b-xs-15 m-b-sm-30">
		<Link href={`/post/${data.slug}`}>
			<a className="d-block">
				<Image
					src={data.featureImg}
					alt={data.title}
					width={390}
					height={390}
				/>
				<div className="grad-overlay grad-overlay__transparent" />
			</a>
		</Link>
		<div className="media post-block grad-overlay position-absolute">
			<div className="media-body justify-content-end">
				<div className="post-cat-group m-b-xs-10">
					<Link href={`/category/${slugify(data.cate)}`}>
						<a className={`post-cat cat-btn btn-mid ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.cate}</a>
					</Link>
				</div>
				<div className="axil-media-bottom">
					<h3 className="axil-post-title hover-line m-b-xs-0">
						<Link href={`/post/${data.slug}`}>
							<a>{data.title}</a>
						</Link>
					</h3>
				</div>
			</div>
		</div>
		{/* End of .post-block */}
	</div>
  );
};

export default PostLayoutSix;
