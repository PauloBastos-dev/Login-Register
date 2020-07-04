import React from 'react'


import { withFormik, ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'
import * as Recaptcha from 'react-recaptcha'


import imageLogo from '../../components/img/oie_transparent.png'
import imageVogo from '../../components/img/voltar5.png'
import imageGogo from '../../components/img/google play.png'
import ReCaptcha from '../../components/body/recaptcha2.js'

import '../../css/login.css'


const Login = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required('Informe um e-mail válido!'),
        password: yup.string().min(8).required('Informe uma senha válida!')
    })
  //  const resetErrors = setErrors => {
  //    setTimeout(() => setErrors({}), 3000)
  //  };

    //const myForm = props => {
  //  const { errors, touched, setErrors } = props;

    //  return (
    //    <Form>
//
      //    <Field
    //      name="email"
    //      placeholder="E-mail"
  //        className="Lform-Field"
  //        />
  //        {touched.name && errors.name}
//          {touched.name && errors.name && resetErrors(setErrors)}
  //        <ErrorMessage
  //            component="span"
  //            name="email"
    //          className="Lform-Error1"
  //        />
  //      </Form>
  //    );
  //  };

  //  const MyEnhancedForm = withFormik({
  //    mapPropsToValues: () => ({ name: "" }),
  //    validations,
  //    handleSubmit: (values, { resetForm }) => {
    //    setTimeout(resetForm, 1000);
  //    }
  //  })(myForm);
    //<MyEnhancedForm />
    return (
      <>

     <div className="Lbox">

            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Lform">
                <div className="Llog">
                 <a className="">
                  <img src={imageLogo} className="Llog1" alt=""/>
                 </a>
                </div>
                    <div className="Lform-Group">
                        <Field
                            name="email"
                            placeholder="E-mail"
                            className="Lform-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Lform-Error1 tip"
                        />

                    </div>
                    <div className="Lform-Group">
                        <Field
                            name="password"
                            type="password"
                            placeholder="Senha"
                            className="Lform-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Lform-Error1"
                        />

                    </div>
                    <div className="Lform-cx">
                     <div className="Echeckbox">
                      <input type="checkbox" value="0" name="Ccheckbox" id="Ccheckbox1" />
                       <label className="txt1" for="Ccheckbox1">Lembrar E-Mail</label>
                     </div>
                       <a href="/NovaSenha" className="txt2">
                        Esqueceu a senha?
                       </a>
                    </div>
                    <button className="Lform-Btn" type="submit">Entrar</button>
                    <ReCaptcha/>
                    <div className="Vlog2" tooltip="voltar">
                      <a className="" href="/">
                       <img src={imageVogo} className="Vlog1 attachment-thumbnail wp-post-image" alt=""/>
                      </a>
                    </div>

                </Form>
            </Formik>
            <div className="Lform-cad">
            <a className="txt3">Não tem uma conta? <a className="txt3" href="/Register" tabindex="0">Cadastre-se</a></a>
            </div>
            <div className="Lform-obt">
             <a href="#" className="txt4">
              Obtenha o aplicativo.
             </a>
             <a className="" href="#">
              <img src={imageGogo} className="Llog2" alt=""/>
             </a>
            </div>
     </div>

      </>
    )
}

export default Login
