import { getFileContentBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import HeadMeta from '../components/elements/HeadMeta';
import HeaderFive from '../components/header/HeaderFive';
import Link from 'next/link';
import FooterTwo from '../components/footer/FooterTwo';
import {useRouter} from "next/router"

const Disclaimer = ({ disclaimer }) => {
  const router = useRouter()
  return (
    <>
            <HeadMeta metaTitle="Disclaimer" slug={router.asPath}/>
            <HeaderFive />
            <div className="bg-grey-light-three mt-5 mb-5">
                <div className="container">
                    <div className="">
                        <div dangerouslySetInnerHTML={{ __html: disclaimer.content }}></div>

                            <Link href="/">
                                <a className="btn btn-primary">BACK TO HOMEPAGE</a>
                            </Link>
                       
                    </div>
                </div>
            </div>

            <FooterTwo />
        </>
  );
};

export async function getStaticProps() {
  const disclaimer = getFileContentBySlug('Disclaimer', 'src/data/pageinfo');
  const content = await markdownToHtml(disclaimer.content || '');
  
  return {
    props: {
        disclaimer : {
        content
      },
    },
  };
}

export default Disclaimer;