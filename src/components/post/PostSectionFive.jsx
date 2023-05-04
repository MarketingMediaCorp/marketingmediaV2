
import WidgetPost from "../widget/WidgetPost";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionFive = ({ pClass, MoreStories,Recent}) => {
    return ( 
        <div className={`random-posts ${pClass ?? "section-gap"}`}>
          
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="axil-content">
                            {MoreStories.slice(0, 8).map((data) => (
                                <PostLayoutTwo data={data} postBgDark={true} key={data.node.slug}/>

                            ))}

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-sidebar">
                            <WidgetPost dataPost={Recent} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionFive;