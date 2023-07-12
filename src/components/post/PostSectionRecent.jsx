
import PostLayoutEleven from "./layout/PostLayoutEleven"

const PostSectionRecent = ({ featured  }) => {

  return (
    <div className="section-gap section-gap-top__with-text top-stories bg-grey-light-three">
      <div className="container">
        <h2 className="axil-title">Latest Stories</h2>
        <div className="row">
            <div className="row">
                {featured.map((data) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-28" key={data.slug}>
                    <PostLayoutEleven data={data} />
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionRecent;
