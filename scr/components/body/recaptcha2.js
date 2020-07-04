import React from "react";
import ReCAPTCHA from "react-google-recaptcha";


const CaptchaVerify = ({yourprops}) => {

 let captcha;

 const onChange = (value) => {
    console.log(value);
 }

 const setCaptchaRef = (ref) => {
    if (ref) {
      return captcha = ref;
    }
 };

 const resetCaptcha = () => {

   captcha.reset();
 }

 return (
   <ReCAPTCHA
     ref={(r) => setCaptchaRef(r) }
     size="invisible"
     sitekey={"6Le5Ff0UAAAAAClE6ltgr8XGPb0cTcbCUuGCQtVO"}
     onChange={onChange, () => resetCaptcha()}
     theme="light"
   />
  )
 };

export default CaptchaVerify;
