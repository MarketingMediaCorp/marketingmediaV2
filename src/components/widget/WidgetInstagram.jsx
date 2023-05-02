import Image from 'next/image';
import Instagram from '../../data/social/Instagram.json';


const WidgetInstagram = () => {
    return (
      <div className="instagram-widget m-b-xs-40">
        <div className="widget-title">
          <h3>Instagram</h3>
        </div>
        <div className="axil-content">
          <ul className="instagram-post-list-wrapper">
            {Instagram.map((data, index) => (
                <li className="instagram-post-list perfect-square" key={index}>
                <a href="#" className="list-inner" >
                    <Image 
                    src={data.thumb}
					alt="Instagran Post"
					width={100}
					height={111}
                    />
                  <div className="post-info-wrapper overlay">
                    <div className="post-info">
                      <i className="feather icon-heart" />
                      {data.like}
                    </div>
                    {/* End of .post-info */}
                    <div className="post-info">
                      <i className="feather icon-message-square" />
                      {data.comment}
                    </div>
                    {/* End of .post-info */}
                  </div>
                  {/* End of .post-info-wrapper overlay */}
                </a>
              </li>
            ))}
            
            {/* End of .instagram-post-list */}
          </ul>
          {/* End of .instagram-post-list-wrapper */}
          <div className="m-t-xs-20">
            <button className="btn btn-primary btn-small">FOLLOW US</button>
          </div>
        </div>
        {/* End of .content */}
      </div>
    );
}
 
export default WidgetInstagram;