import React from 'react'

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {history} from '../../history'
/*import ProgressBar from 'react-bootstrap/ProgressBar'*/

import imageLogo from '../../components/img/oie_transparent.png'
import imageGogo from '../../components/img/google play.png'
import imageVogo from '../../components/img/voltar5.png'
import ReCaptcha from '../../components/body/recaptcha2.js'


import '../../css/register.css'


 const Register = () => {
   const handleSubmit = values => {
     axios.post('http://localhost:8080/v1/api/user', values)
        .then(resp => {
          const {data} = resp
          if (data) {
            localStorage.setItem('app-token', data)
            history.push('/Login')
          }
        })
   }

   {/*Y: yup.number(),
   associaternumber:yup.number()
   .when (Y,{
     is: Y.length > 0 && Y.length < 5 ,
     then: yup.number().positive().integer().required()
   }),*/}
   const validations = yup.object().shape({
     associaternumber: yup.string()
     .min(2, 'Informe um número válido!')
     .max(5, 'Informe um número válido!')
     .matches(/^[0-9]*$/, 'Informe um número válido!')
     .required('Informe o número de seu cadastro ABZ!'),
     fullname: yup.string()
     .min(3, 'Permitido nomes a partir de 3(três) caracteres!')
     .max(20, 'Permitido nomes até 20(vinte) caracteres!')
     .trim()
     .matches(/^[A-Za-zÀ-ÿ\- &]*$/, 'Informe um usuário correto sem números!')
     .notOneOf(['ADMIN','ADMINISTRADOR','Admin','Administrador','admin','administrador','$', '%',' '], 'Esse não pode ☺... Informe um usuário correto!')
     .required('Informe seu nome completo!'),
     username: yup.string()
     .min(4,'Permitido nomes com no mínimo 4 caracteres!')
     .max(10, 'Permitido nomes até 10(dez) caracteres!')
     .trim()
     .matches(/^[A-Za-zÀ-ÿ\-&]*$/, 'Informe um usuário correto sem números ou espaços internos!')
     .notOneOf(['ADMIN','ADMINISTRADOR','Admin','Administrador','admin','administrador','$', '%', ' '], 'Esse não pode ☺... Informe um usuário correto!')
     .required('Informe um usuário válido!'),
     email: yup.string()
     .email()
     .trim()
     .required('Informe um e-mail válido!'),
     password: yup.string()
     .min(8, 'Permitido senhas a partir de 8(oito) caracteres!')
     .trim()
     .required('Informe uma senha válida!')
   })


   return (
  <div className="Rlog">

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
       name="associaternumber"
       placeholder="Número do associado ABZ"
       className="Lform-Field"
       />
      <ErrorMessage
       component="span"
       name="associaternumber"
       className="Lform-Error2"
       />
      </div>
      <div className="Lform-Group">
      <Field
       name="fullname"
       placeholder="Nome completo"
       className="Lform-Field"
       />
      <ErrorMessage
       component="span"
       name="fullname"
       className="Lform-Error2"
       />
      </div>
      <div className="Lform-Group">
      <Field
       name="username"
       placeholder="Nome do usuário"
       className="Lform-Field"
       />
      <ErrorMessage
       component="span"
       name="username"
       className="Lform-Error2"
       />
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
        className="Lform-Error1"
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
       <p className="senhatexto spc">A senha deve ter no mínimo de 8 caracteres,</p>
       <p className="senhatexto">com no mínimo uma letra maiúscula,</p>
       <p className="senhatexto">e um número ou um caracter especial.</p>
       <button className="Lform-RBtn" type="submit">Cadastre-se</button>
       <ReCaptcha/>
       <div className="VlogR2" tooltip="voltar">
         <a className="" href="/Login">
          <img src={imageVogo} className="VlogR1 attachment-thumbnail wp-post-image" alt=""/>
         </a>
       </div>

      </Form>
    </Formik>
    <div className="Lform-Rcad">
    <a className="txt3">Tem uma conta? <a className="txt3" href="/Login" tabindex="0">Conecte-se</a></a>
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
  )
}

 export default Register
