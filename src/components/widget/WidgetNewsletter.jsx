import { useRef, useEffect } from 'react';
import FormGroup from '../contact/FormGroup';

const WidgetNewsletter = () => {

    return (
      <div className="newsletter-widget weekly-newsletter bg-grey-light-three m-b-xs-40">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <i className="feather icon-send" />
          </div>
          <div className="section-title">
            <h3 className="axil-title">Subscribe To Our Weekly Newsletter</h3>
            <p className="mid m-t-xs-10 m-b-xs-20">
              No spam, notifications only about new products, updates.
            </p>
          </div>
          {/* End of .section-title */}
          <div className="subscription-form-wrapper">
            <form action="#" className="subscription-form">
              <FormGroup pClass="form-group-small m-b-xs-20" type="text" name="subscription-email-2" label=" Enter Email Address" />
              <div className="m-b-xs-0">
                <button className="btn btn-primary btn-small">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default WidgetNewsletter;