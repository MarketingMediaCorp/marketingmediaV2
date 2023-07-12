
import WidgetPost from "../widget/WidgetPost";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionFive = ({ pClass, MoreStories}) => {
    return ( 
        <div className={`random-posts ${pClass ?? "section-gap"}`}>
          
            <div className="container">
            <h2 className="axil-title">Home Electronics</h2>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="axil-content">
                            {MoreStories.slice(0, 8).map((data) => (
                                <PostLayoutTwo data={data} postBgDark={true} key={data.node.slug}/>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionFive;