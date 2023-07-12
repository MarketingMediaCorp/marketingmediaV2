import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderFive from "../../components/header/HeaderFive";
import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";
import {getUrl,getPSinglePost} from "../../../lib/api2";
import {useRouter} from "next/router"
import StructuredData from "../../components/post/StructuredData";
import { DOMAIN } from "../../../lib/constants";



const PostDetails = ({postContent}) => {
	
  
	const postData = postContent.single
	const data = postData.edges[0]

	const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
	const postImage = data.node.featuredImage.node.sourceUrl.replace('/images/', basePathLink + '/images/');
	const date = new Date(data.node.date)
	const formattedDate = date.toISOString().split("T")[0]

	const modifiedDate = new Date(data.node.date)
	const modifiedFormattedDate = modifiedDate.toISOString().split("T")[0]

    const router = useRouter()
	const structureCoData = 
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"url": DOMAIN,
		"logo": `${DOMAIN}/favicon/safari-pinned-tab.svg`
	}
	const structureBlogData = {
		"@context": "https://schema.org",
		"@type": "Article",
		"mainEntityOfPage": {
		"@type": "WebPage",
        "@id": router.asPath
		},
		"headline": data.node.title,
		"description": data.node.excerpt.replace(/(<([^>]+)>)/gi, ""),
		"image": postImage,
		"author": {
          "@type": "Organization",
          "name": "Marketing Media",
          "url": DOMAIN
		},
		"publisher": {
			"@type": "Organization",
			"name": "Marketing Media",
			"logo": {
			"@type": "ImageObject",
			"url": `${DOMAIN}/favicon/safari-pinned-tab.svg`
        }
		},
		"datePublished": formattedDate,
		"dateModified": modifiedFormattedDate
    };
	const BreadCrumbMarkup = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
		{
			"@type": "ListItem",
			"position": 1,
			"item": {
			"@id": DOMAIN,
			"name": "Home"
			}
		},
		{
			"@type": "ListItem",
			"position": 2,
			"item": {
			"@id": `${DOMAIN}/${data.node.categories.edges[0].node.slug}`,
			"name": data.node.categories.edges[0].node.name
			}
		},
		{
			"@type": "ListItem",
			"position": 3,
			"item": {
			"@id": router.asPath,
			"name": data.node.title
			}
		}
		]
	};

		const allStructuredData = [
			structureBlogData,
			structureCoData,
			BreadCrumbMarkup,
		]
	
    return ( 
        <>
		<HeadMeta metaTitle={data.node.title} metadescription={data.node.excerpt} slug={router.asPath} image={data}/>
		<StructuredData data={allStructuredData} />

        <HeaderFive />
		<div className="alert alert-primary w-100 h-01 fs-6 lh-sm border-0 text-center pt-2 pb-3" role="alert">
		We prioritize our readers&apos; satisfaction by providing high-quality content, while their continued support allows us to sustain our operations.		</div>
        <Breadcrumb bCat={data.node.categories.edges[0].node.slug} aPage={data.node.title}/>
        <PostFormatStandard  postData={data} />
        <FooterTwo />
        </>
     );
}
 
export default PostDetails;

export async function getStaticProps({ params }) {

	const {category,slug} = params;

	const single = await getPSinglePost(slug,category)
	


    return {
        props: {
            postContent : {
                single
            }
           
        },
                 revalidate: 60,
    }
}

export async function getStaticPaths() {
	const allPostsWithSlug = await getUrl()
	const allData = allPostsWithSlug.edges
	
	const paths = allData.map(post => ({
        params: {
			category: post.node.categories.edges[0].node.slug,
            slug: post.node.slug
			
			
		}
	}))
	
    return {
		paths,
        fallback: "blocking",
	}
}
