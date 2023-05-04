import Head from 'next/head'

const HeadMeta = ({metaTitle}) => {

    return ( 
        <Head>
            <meta charSet="utf-8" />
            <meta property="og:type" content ="article"/>
            <meta name="twitter:creator" content="@MMedia_Agency"/>
            <meta property="og:url" content="https://www.marketingmedia.solutions/"/>
            <meta property="og:title" content="Marketing Media - Real Estate Meets Tech"/>
            <meta property="og:description" content="Stay up-to-date with the latest technological trends in the real estate industry with Marketing Media. As the real estate industry adapts to the technology era, we aim to be your go-to source for information on the newest tech trends in the real estate industry."/>
            <meta property="og:site_name" content="Marketing Media"/>
            <meta name="keywords" content="real estate, proptech , home electronics , AI , blockchain"/>
            <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
            <meta name="author" content="The Marketing Media Team"/>
            <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Stay up-to-date with the latest technological trends in the real estate industry with Marketing Media. As the industry adapts to the technology era, we aim to be your go-to source for information on the newest tech trends in the industry." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{`${metaTitle} | Real Estate Meets Tech `}</title>
            <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon.ico`} />

            {/* Favicon */}
            <link rel="apple-touch-icon" sizes="152x152" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/apple-touch-icon.png`}/>
            <link rel="apple-touch-icon" sizes="152x152" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/apple-touch-icon.png` }/>
            <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon-32x32.png` }/>
            <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon-16x16.png` }/>
            <link rel="manifest" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/site.webmanifest`}/>
            <link rel="mask-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/safari-pinned-tab.svg`} color="#5bbad5"/>
           
            <meta name="theme-color" content="#1fa9ff"/>

            {/* Cannoicol Link */}
        </Head>
     );
}
 
export default HeadMeta;