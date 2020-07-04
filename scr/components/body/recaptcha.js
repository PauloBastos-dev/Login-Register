import React from 'react'

import {Recaptcha} from 'react-recaptcha'




const ReCaptcha = () => {
let recaptchaInstance
const executeCaptcha = function () {
  recaptchaInstance.execute()
}

const verifyCallback = function (response) {
  console.log(response)
  document.getElementById("someForm").submit()
}

return (

  <div>
    <form id="someForm" action="/search" method="get">
      <input type="text" name="query"/>
    </form>
    <button onClick={executeCaptcha}>Submit</button>
    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey="6Le5Ff0UAAAAAClE6ltgr8XGPb0cTcbCUuGCQtVO"
      size="invisible"
      verifyCallback={verifyCallback}
      />,
            </div>
)}
export default Recaptcha
