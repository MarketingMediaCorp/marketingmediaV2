import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutOne from "./layout/PostLayoutOne";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionOne = ({postData,EditorChoice,GlobalPropTech}) => {
    SortingByDate(postData);
    return (
      <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
             
              <PostLayoutOne data={EditorChoice.edges[0]?.node} />
             
            </div>
            <div className="col-lg-6">
              <div className="axil-recent-news">
                <SectionTitle
                  title="Recent News"
                  btnText="ALL RECENT NEWS"
                  pClass="m-b-xs-30"
                  slugText='global-proptech-news'
                />
                <div className="axil-content">
                	{GlobalPropTech.map((data) => {
                    return(
                        <PostLayoutTwo data={data} postBgDark={true} key={data.slug}/>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PostSectionOne;