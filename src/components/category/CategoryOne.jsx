import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils";

const CategoryOne = ({cateData}) => {
    const categories = cateData.map(data => {
        const obj = {
            name: data.cate,
            thumb: data.cate_img
        }
        return obj;
    });
    
    const category = categories.reduce((prev, curr) => {
        prev[curr.name] = (prev[curr.name] || 0) + 1
        return prev;
    }, {})
    
    var cateList = Object.keys(category).map(cateTitle => {
        const imgGet =  categories.filter(post => post.name === cateTitle);
        
        return {
            name: cateTitle, 
            slug: slugify(cateTitle),
            count: category[cateTitle],
            cateImg: imgGet[0].thumb
        }; 
    });

  return (
    <div className="axil-banner-cat-counter">
      <div className="container">
        <div className="axil-content">
          <ul className="category-list-wrapper">
                {cateList.slice(0, 5).map((data) => (
					<li className="category-list perfect-square" key={data.slug}>
						<Link href={`/category/${data.slug}`}>
						<a className="list-inner">
							<Image
							src={data.cateImg}
							alt={data.name}
							width={160}
							height={160}
							/> 
							<div className="post-info-wrapper overlay">
							<div className="counter-inner">
								<span className="counter">{data.count}</span>+
							</div>
							<h4 className="cat-title">{data.name}</h4>
							</div>
						</a>
						</Link>
					</li>
                ))}
          </ul>
          {/* End of .category-list-wrapper */}
        </div>
        {/* End of .axil-content */}
      </div>
      {/* End of .container */}
    </div>
  );
};

export default CategoryOne;
