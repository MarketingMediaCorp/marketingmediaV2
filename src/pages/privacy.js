
import HeadMeta from '../components/elements/HeadMeta';
import HeaderFive from '../components/header/HeaderFive';
import Link from 'next/link';
import FooterTwo from '../components/footer/FooterTwo';
import {useRouter} from "next/router"
import { getAboutPage } from "../../lib/api2"


const PrivacyPolicy = ({ privacypolicy }) => {

  const router = useRouter()
  return (
    <>
            <HeadMeta metaTitle="Privacy Policy" slug={router.asPath} />
            <HeaderFive />
            <div className="bg-grey-light-three mt-5 mb-5">
                <div className="container">
                    <div className="">
                        <div dangerouslySetInnerHTML={{ __html: privacypolicy.privacypolicy.content }}></div>

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
  const privacypolicy = await getAboutPage("privacy-policy")

  
  return {
    props: {
        privacypolicy : {
          privacypolicy
      },
    },
  };
}

export default PrivacyPolicy;