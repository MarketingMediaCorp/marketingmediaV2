

import Image from "next/image";
import SectionTitle from "../../elements/SectionTitle";


const PostFormatStandard = ({postData}) => {
  const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
  const postContent = postData.node.featuredImage.node.sourceUrl.replace('/images/', basePathLink + '/images/');

  const options = {year : "numeric", month : "long" , day : "numeric"}
  const date = new Date(postData.node.modified)
  const time = postData.node.modified.split("T")[1]
  const formattedDate = date.toLocaleDateString('en-US', options);

    return (
      <>
        <div className="post-single-wrapper p-t-xs-60">
          <div className="container"> 
            <div className="row">
              <div className="col-lg-8">
                <main className="site-main">
                <SectionTitle title={postData.node.title} btnText={postData.node.categories.edges[0].node.name} pClass="m-b-xs-40" btnUrL={postData.node.categories.edges[0].node.name} slugText={postData.node.categories.edges[0].node.slug}/>
                  <p className="fw-light fs-4 text-secondary">Last Updated: {formattedDate} {time}</p> 
                  <article className="post-details"> 
                    <div className="single-blog-wrapper">
                     
                      <Image src={postContent} 
                      alt={postData.node.featuredImage.node.altText}
                      width={730}
                      height={550} className="m-b-lg-40"/>
                      <div dangerouslySetInnerHTML={{__html: postData.node.content }}></div>
                    
                    </div>
                  </article>
                  <hr className="m-t-xs-50 m-b-xs-60" />
			
                </main>
              </div>
              <div className="col-lg-4">
                <div className="post-sidebar">
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default PostFormatStandard;