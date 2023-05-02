import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import PostVideoTwo from "./layout/PostVideoTwo";

const PostSectionFour = ({postData}) => {

    const videoPost = postData.filter(post => post.postFormat === 'video');

    return ( 
        <div className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
            <div className="container">
                <SectionTitle title="Videos" btnText="All VIDEOS" pClass="title-white m-b-xs-40"/>
                <div className="row">
                    <div className="col-lg-8">
                        {videoPost.slice(0, 1).map((data) => (
                            <PostVideoOne data={data} key={data.slug} />
                        ))}
                    </div>
                    <div className="col-lg-4">
                        {videoPost.slice(1, 5).map((data) => (
                            <PostVideoTwo data={data} videoIcon={true} key={data.slug}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionFour;