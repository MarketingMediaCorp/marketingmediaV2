import SectionTitle from "../elements/SectionTitle";
import PostLayoutThree from "./layout/PostLayoutThree";

const PostSectionTwo = ({ postData, featured  }) => {

  return (
    <div className="section-gap section-gap-top__with-text top-stories bg-grey-light-three">
      <div className="container">
        <SectionTitle title="Top Stories" btnText="All Top Stories" />
        <div className="row">
          <div className="col-lg-8">
            {featured.slice(0, 1).map((data) => (
				      <PostLayoutThree data={data} postSizeLg={true} key={data.slug}/>
            ))}
          </div>
		  <div className="col-lg-4">
		  	{featured.slice(1, 3).map((data) => (
				  <PostLayoutThree data={data} key={data.slug}/>
        ))}
		  </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
