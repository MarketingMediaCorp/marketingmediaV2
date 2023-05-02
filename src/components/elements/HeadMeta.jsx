import Head from 'next/head'
import { useRouter } from 'next/router';

const HeadMeta = ({metaTitle}) => {

    return ( 
        <Head>
            {/* Basic metas */}
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex, follow" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Papr Trendy News and Megazine Template" />
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
            <meta name="msapplication-TileColor" content="#2d89ef"/>
            <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
            <meta name="theme-color" content="#1fa9ff"/>

            {/* Cannoicla Link */}
        </Head>
     );
}
 
export default HeadMeta;