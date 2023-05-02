import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import PostLayoutFive from "./layout/PostLayoutFive";

const PostSectionEight = ({postData}) => {
    return ( 
        <div className="recent-news-wrapper__fluid p-t-lg-80 p-t-xs-60 p-b-xs-20">
            <div className="custom-fluid-container">
                <div className="masonry-grid">
                    <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2, 991: 3}}>
                    <Masonry gutter="0 70px">
                        {postData.slice(0, 9).map((data, index) => (
                            <div className="grid-item" key={data.slug}>
                                <PostLayoutFive data={data} index={index} />
                            </div>
                        ))}
                    </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionEight;