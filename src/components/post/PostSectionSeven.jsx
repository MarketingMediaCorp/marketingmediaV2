import SectionTitle from "../elements/SectionTitle";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import PostVideoThree from "./layout/PostVideoThree";

const PostSectionSeven = ({postData}) => {

    const videoStory = postData.filter(post => post.postFormat === 'video' && post.story === true);
    const storyPost = postData.filter(post => post.story === true);
    
    return ( 
       <div className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
            <div className="container">
                <SectionTitle pClass="title-white m-b-xs-40" title="Top Stories" btnText="All TOP STORIES"/>
                <div className="row">
                    <div className="col-lg-6">
                        {videoStory.slice(0, 1).map((data) => (
                            <PostVideoThree data={data} key={data.slug} />
                        ))}
                    </div>
                   
                    <div className="col-lg-6">
                        <div className="axil-content">
                            {storyPost.slice(1, 5).map((data) => (
                                <div>post</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}
 
export default PostSectionSeven;