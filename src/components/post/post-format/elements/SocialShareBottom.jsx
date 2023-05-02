const SocialShareBottom = () => {
  return (
    <div className="post-shares m-t-xs-60">
      <div className="title">SHARE:</div>
      <ul className="social-share social-share__rectangular">
        <li>
          <a href="#" className="btn bg-color-twitch">
            <i className="fab fa-twitch" />
            1K+
          </a>
        </li>
        <li>
          <a href="#" className="btn bg-color-facebook">
            <i className="fab fa-facebook-f" />
            1K+
          </a>
        </li>
        <li>
          <a href="#" className="btn bg-color-twitter">
            <i className="fab fa-twitter" />
            1000+
          </a>
        </li>
        <li>
          <a href="#" className="btn bg-color-linkedin">
            <i className="fab fa-linkedin-in" />
            1M+
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialShareBottom;
