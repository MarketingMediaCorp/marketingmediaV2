import { getFileContentBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import HeadMeta from '../components/elements/HeadMeta';
import HeaderFive from '../components/header/HeaderFive';
import Link from 'next/link';
import FooterTwo from '../components/footer/FooterTwo';
import {useRouter} from "next/router"

const ContactInfo = () => {
const router = useRouter()
  return (
    <>
    <HeadMeta metaTitle="Contact Us" slug={router.asPath} />
    <HeaderFive />
    <div className="axil-contact-info-wrapper p-l-md-45 m-b-xs-30">
      <div className="axil-contact-info-inner">
        <h1 className="h4 m-b-xs-10 mb-5">Reach out to Us</h1>
        <div className="axil-contact-info mt-5">
        
      
            <div className="h5 m-b-xs-10 mb-5 mt-5">For Partnerships and Collaborations</div>
            <div>
            For Partnerships and Collaborations, we are excited to explore potential opportunities and leverage collective strengths. We firmly believe that collaboration fuels innovation and drives meaningful impact. If you&apos;re interested in partnering with us or have any inquiries, please feel free to reach out to us at <a href="matthew@marketingmedia.solutions" className='anchorlinks'>matthew@marketingmedia.solutions</a>.<br/>
           <p className='mt-5'>Whether you have a specific collaboration proposal in mind or simply wish to discuss potential opportunities further, we are eager to hear from you. Kindly provide us with some initial information about your organization and the nature of the partnership you envision. This will enable us to better understand your goals and tailor our response to your specific needs.

            We value open communication and welcome your questions, ideas, and suggestions.</p>
            </div>
            <div>
              
            </div>
            <div className="h5 m-b-xs-10 mt-5">General Inquires</div>
            For any form of General Inquires, you can reach us at <a href="support@marketingmedia.solutions"  className='anchorlinks'>support@marketingmedia.solutions</a>.<br/> 
            <div>
              
            </div>
          {/* End of address */}
        </div>
      </div>
    </div>
    <FooterTwo />

    </>
  );
};

export default ContactInfo;
