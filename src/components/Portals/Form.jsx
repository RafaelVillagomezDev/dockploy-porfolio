import React, { lazy, useState } from "react";
import DOMPurify from 'dompurify';
import {
  BoxInput,
  BoxPortal,
  BtnClosePortal,
  ContainerForm,
  ErrorMessague,
  FormPortal,
  InputArea,
  InputPortal,
  InputSubmit,
  LabelInput,
} from "./styles/Form";
import { createPortal } from "react-dom";
import { FaX } from "react-icons/fa6";
import { sendEmail } from "../../services/sendMail";
import { generateToken } from "../../services/generateToken";


function Form(props) {
  const portalForm = document.body;

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    messague: "",
  });


  const [errors, setErrors] = useState({});



  const regexPatterns =  [
    {
      field: 'email',
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Formato estándar de correo electrónico
      msg: 'El formato del correo electrónico es inválido.'
    },
    {
      field: 'subject',
      regex: /^[A-Za-z0-9]*$/, 
      msg: 'El asunto debe tener numeros o letras , no se permiten caracteres especiales.'
    },
    {
      field: 'messague',
      regex: /^[A-Za-z0-9 !@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|-]{8,}$/, 
      msg: 'El mensaje debe tener al menos 8 caracteres.'
    }
  ];
  
  const validateField = (name, value) => {
    const pattern = regexPatterns.find(rule => rule.field === name);

    if (pattern && value.length>0 ) {
      return pattern.regex.test(value) ? '' : pattern.msg;
    }
    return '';
  };

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    
     // Validar el campo actual
     const errorMsg = validateField(name, DOMPurify.sanitize(value));

     // Actualizar los errores
     setErrors((prevErrors) => ({
       ...prevErrors,
       [name]: errorMsg,
     }));

    

   
     setFormData((prevValues) => ({
       ...prevValues,
       [name]: value,
     }));
   

  };

  const submitEmail = async (event) => {
    event.preventDefault();

    try {
      const token = await generateToken();
      const response = await sendEmail(token,formData);
     
      return response.messague
    } catch (error) {
     
      console.error("Error:", error);
    }
  };

  return createPortal(
    <ContainerForm openPortal={props.openPortal ? props.openPortal : undefined}>
      <BoxPortal>
        <BtnClosePortal onClick={props.openPortalForm}>
          <FaX style={{ color: "#FFF" }} size={"18px"} />
        </BtnClosePortal>
        <FormPortal>
          <BoxInput>
            <LabelInput htmlFor="email">Email</LabelInput>
            <InputPortal
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              id="email"
            />
             { errors.email && <ErrorMessague>{errors.email}</ErrorMessague>}
          </BoxInput>
          <BoxInput>
            <LabelInput htmlFor="subject">Asunto</LabelInput>
            <InputPortal
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
             { errors.subject && <ErrorMessague>{errors.subject}</ErrorMessague>}
          </BoxInput>
          <BoxInput>
            <LabelInput htmlFor="messague">Mensaje</LabelInput>
            <InputArea
              name="messague"
              id="messague"
              value={formData.messague}
              onChange={handleChange}
            />
             {errors.messague && <ErrorMessague>{errors.messague}</ErrorMessague>}
          </BoxInput>
          <BoxInput>
            <InputSubmit aria-label="Enviar formulario" type="submit" onClick={submitEmail} value={"Enviar"} />
          </BoxInput>
        </FormPortal>
      </BoxPortal>
    </ContainerForm>,
    portalForm
  );
}

export default Form;
