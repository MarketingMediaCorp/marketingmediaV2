import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getCategory, getUrl } from "../../lib/api2";
import { DOMAIN } from "../../lib/constants";


async function generateSiteMap (): Promise<string>  {
    const posts = await getCategory()
    const blogcontent = await getUrl()

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${DOMAIN}/</loc>
    </url>
    ${posts.edges.map((urlDATA) => 
        {
            return `<url>
            <loc>${DOMAIN}/${urlDATA.node.slug}</loc>
            </url>`
        }
    )}
    ${blogcontent.edges.map((urlDATA) => 
        {
            return `<url>
            <loc>${DOMAIN}/${urlDATA.node.categories.edges[0].node.slug}/${urlDATA.node.slug}</loc>
            </url>`
        }
    )}
    </urlset>`
}
export default function Sitemap(){
    return null;
}

export const getServerSideProps: GetServerSideProps<Record<string, never>> = async (ctx: GetServerSidePropsContext) => {

    ctx.res.setHeader('Content-Type', 'text/xml')
    const xml = await generateSiteMap()
    ctx.res.write(xml)
    ctx.res.end()

    return {
        props:{},
    }
    
}