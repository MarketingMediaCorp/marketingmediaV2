import SectionTitle from "../elements/SectionTitle";
import PostLayoutThree from "./layout/PostLayoutThree";
import PostLayoutEleven from "./layout/PostLayoutEleven"

const PostSectionTwo = ({ postData, featured  }) => {

  return (
    <div className="section-gap section-gap-top__with-text top-stories bg-grey-light-three">
      <div className="container">
        <h2 className="axil-title">Top Stories</h2>
        <div className="row">
          <div className="col-lg-8">
            {featured.slice(0, 1).map((data) => (
				      <PostLayoutEleven data={data} postSizeLg={true} key={data.slug}/>
            ))}
          </div>
		  <div className="col-lg-4">
		  	{featured.slice(1, 3).map((data) => (
				  <PostLayoutEleven data={data} key={data.slug}/>
        ))}
		  </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
