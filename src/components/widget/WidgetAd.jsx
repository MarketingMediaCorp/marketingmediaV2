import Image from "next/image";

const WidgetAd = ({img, height, width}) => {
    return (
      <div className="add-block-widget m-b-xs-40">
        <a href="https://themeforest.net/item/blogar-blog-magazine-wordpress-theme/30583777">
            <Image
                src={img ?? "/images/clientbanner/clientbanner2.jpg"}
                alt="sidebar Ad"
                width={width ?? 320}
                height={height ?? 287}
                className="img-fluid"
            />
        </a>
      </div>
    );
}
 
export default WidgetAd;