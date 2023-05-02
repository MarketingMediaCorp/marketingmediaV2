import FormGroup from "./FormGroup";
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import { useRef, useState } from 'react';


const Result = () => {
  return (
      <Alert variant="success" className="success-msg">
          Your Message has been successfully sent.
      </Alert>
  )
}

const ContactForm = () => {

const form = useRef();

const [ result, showresult ] = useState(false);

const sendEmail = (e) => {
	e.preventDefault();

	emailjs.sendForm('service_g3aufzu', 'template_sk4dqiz', form.current, '9L_sRsO66U253zcxC')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		form.current.reset();
		showresult(true);
	};

	setTimeout(() => {
		showresult(false);
	}, 2000);

	return (
	<div className="axil-contact-form-block m-b-xs-30">
		<div className="section-title d-block">
		<h2 className="h3 axil-title m-b-xs-20">Send Us a Message</h2>
		<p>
			Your email address will not be published. All the fields are
			required.
		</p>
		</div>
		<div className="axil-contact-form-wrapper p-t-xs-10">
		<form className="axil-contact-form row no-gutters" ref={form} onSubmit={sendEmail}>
			<FormGroup pClass="col-12" type="text" label="Name" name="contact-name" />
			<FormGroup pClass="col-12" type="text" label="Phone" name="contact-phone" />
			<FormGroup pClass="col-12" type="email" label="Email" name="contact-email" />
			<FormGroup pClass="col-12" type="textarea" label="Message" name="contact-message" />
			<div className="col-12">
				<button className="btn btn-primary m-t-xs-0 m-t-lg-20">
					SUBMIT
				</button>
			</div>
			<div className="col-12 form-group">
				{result ? <Result /> : null}
          </div>
		</form>
		</div>
	</div>
	);
}
 
export default ContactForm;