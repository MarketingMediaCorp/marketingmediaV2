import SocialLink from '../../data/social/SocialLink.json';


const WidgetSocialShare = () => {

  return (
    <div className="sidebar-social-share-widget m-b-xs-40">
      <ul className="social-share-list-wrapper">
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.fb.url} className="list-inner bg-color-facebook">
            <i className={SocialLink.fb.icon} />
            <div className="counts">{SocialLink.fb.follower}</div>
            <div className="title">Fans</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.twitter.url} className="list-inner bg-color-twitter">
            <i className={SocialLink.twitter.icon} />
            <div className="counts">{SocialLink.twitter.follower}</div>
            <div className="title">Followers</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.yt.url} className="list-inner bg-color-youtube">
            <i className={SocialLink.yt.icon} />
            <div className="counts">{SocialLink.yt.follower}</div>
            <div className="title">Subscribers</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.linked.url} className="list-inner bg-color-linkedin">
            <i className={SocialLink.linked.icon} />
            <div className="counts">{SocialLink.linked.follower}</div>
            <div className="title">Connections</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.discord.url} className="list-inner bg-color-vimeo">
            <i className={SocialLink.discord.icon} />
            <div className="counts">{SocialLink.discord.follower}</div>
            <div className="title">Connections</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.pinterest.url} className="list-inner bg-color-pinterest">
            <i className={SocialLink.pinterest.icon} />
            <div className="counts">{SocialLink.pinterest.follower}</div>
            <div className="title">Followers</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.slack.url} className="list-inner bg-color-twitch">
            <i className={SocialLink.slack.icon} />
            <div className="counts">{SocialLink.slack.follower}</div>
            <div className="title">Followers</div>
          </a>
        </li>
        {/* End of .social-share-list */}
        <li className="social-share-list text-center perfect-square">
          <a href={SocialLink.instagram.icon} className="list-inner bg-color-instagram">
            <i className={SocialLink.instagram.icon} />
            <div className="counts">{SocialLink.instagram.follower}</div>
            <div className="title">Followers</div>
          </a>
        </li>
        {/* End of .social-share-list */}
      </ul>
      {/* End of .social-share-list-wrapper */}
    </div>
  );
};

export default WidgetSocialShare;
