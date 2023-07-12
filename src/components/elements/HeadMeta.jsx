import Head from 'next/head'
import {useRouter} from 'next/router'
import { DOMAIN } from '../../../lib/constants';


const HeadMeta = ({metaTitle, metadescription,slug,image}) => {
    const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
    let postContent = null
    image  ? postContent = image?.node.featuredImage.node.sourceUrl.replace('/images/', basePathLink + '/images/') : postContent = null
    const router = useRouter()
    return ( 
        <Head>
        
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-NBZLH6LFM8"></script>
           
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3271026391156343" crossOrigin="anonymous"></script>
            <meta name="ahrefs-site-verification" content="5ab2cce98bc029503b607ecbb95238584674d33bccac6001219ae889bbc0afeb"/>
            <meta name="tlsdk" content="3ffcf5e1459340eea109c40ef3f420d0"/>
            <meta charSet="utf-8" />

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@site"/>
            <meta property="og:type" content ="article"/>
            <meta name="twitter:creator" content="@MMedia_Agency"/>
            {router.asPath === '/' ?
                 (<meta property="og:url" content={`${DOMAIN}`}/>)
                 :( <meta property="og:url" content={`${DOMAIN}${router.asPath}`}/>)
            }
           
            <meta property="og:title" content={`${metaTitle}`}/>
            <meta property="og:description" content={metadescription?.replace(/<\/?p>/g, "") ?? "Stay up-to-date with the latest technological trends in the real estate industry with Marketing Media. As the real estate industry adapts to the technology era, we aim to be your go-to source for information on the newest tech trends in the real estate industry."}/>
            <meta property="og:site_name" content="Marketing Media"/>
            <meta property="og:image" content={ postContent  ? postContent : `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/safari-pinned-tab.svg`} />

            
            <meta property="og:image:alt" content={image?.node.featuredImage.node.altText ?? "Marketing Media Logo Dark"}/>
            <meta property="og:image:width" content="1600"/>
            <meta property="og:image:height" content="1490"/>
            <meta name="keywords" content="real estate, proptech , home electronics , AI , blockchain"/>
            <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
            <meta name="author" content="Marketing Media"/>
            <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            
            {/* Cannoicol Link */}
            {router.asPath === '/' ?
                 (<link rel="canonical" href={`${DOMAIN}`}/>)
                 :( <link rel="canonical" href={`${DOMAIN}${router.asPath}`}/>)
            }

              


            <meta name="description" content={metadescription?.replace(/<\/?p>/g, "") ?? "Stay up-to-date with the latest technological trends in the real estate industry with Marketing Media. As the industry adapts to the technology era, we aim to be your go-to source for information on the newest tech trends in the industry."} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{`${metaTitle}`}</title>
            <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon.ico`} />

            {/* Favicon */}
            <link rel="apple-touch-icon" sizes="152x152" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/apple-touch-icon.png`}/>
            <link rel="apple-touch-icon" sizes="152x152" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/apple-touch-icon.png` }/>
            <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon-32x32.png` }/>
            <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon-16x16.png` }/>
            <link rel="manifest" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/site.webmanifest`}/>
            <link rel="mask-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/safari-pinned-tab.svg`} color="#5bbad5"/>
           
            <meta name="theme-color" content="#1fa9ff"/>

        </Head>
     );
}
 
export default HeadMeta;