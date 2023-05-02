import FormGroup from "../../../contact/FormGroup";

const PostComment = () => {

  return (
    <div className="post-comment-area">
      <div className="comment-box">
        <h2>Leave A Reply</h2>
        <p>
          Your email address will not be published.
          <span className="primary-color">*</span>
        </p>
      </div>
      {/* End of .comment-box */}
      <form action="#" className="comment-form row m-b-xs-60">
        <div className="col-12">
          <FormGroup pClass="comment-message-field" label="Comment" type="textarea" name="comment-message" rows={6}/>
        </div>
        <div className="col-md-4">
			<FormGroup type="text" name="name" label="Name" />
        </div>
        <div className="col-md-4">
			<FormGroup type="text" name="email" label="Email" />
        </div>
        <div className="col-md-4">
		<FormGroup type="text" name="website" label="Website" />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">POST COMMENT</button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
