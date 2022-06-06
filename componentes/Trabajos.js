
import React, { useState,useEffect} from 'react';
import axios from "axios"
import Swal from "sweetalert2"
import FooterLink from './FooterLink';

export default function Trabajos() {
    const [pais,setPais]= useState(null)
    const [nombre,setNombre]= useState("")
    const [correo,setCorreo]= useState("")
    const [asunto,setAsunto]= useState("")
    const [mensaje,setMensaje]= useState("")
    
  
    function handleChangePais(e){
      const value = e.target.value
      setPais(value)
    }
    function handleChangeName(e){
      const value = e.target.value
      setNombre(value)
    }
    function handleChangeEmail(e){
      const value = e.target.value
      setCorreo(value)
    }
    function handleChangeAsunto(e){
      const value = e.target.value
      setAsunto(value)
    }
    function handleChangeMensaje(e){
      const value = e.target.value
      setMensaje(value)
    }
    function sendNotification() {
      switch (pais) {
        case "Mexico":
          var correo = "jhernandez@crepesywaffles.com.mx";
          break;
        case "Ecuador":
          var correo = "seleccion@crepesywaffles.ec";
          break;
        case "Chile":
          var correo = "iris.iglesias@crepesywaffles.com";
          break;
        case "España":
          var correo = "monicahenao@crepesywaffles.es";
          break;
        case "Panama":
          var correo = "crepessa@gmail.com";                                                                                                                                                                                                                                                                    
          break;
      }
      var data = new FormData();
      data.append('email',correo);
      data.append('asunto', `${asunto}`);
      data.append('mensaje', `${mensaje}`);
  
      var config = {
        method: 'post',
        url: 'https://www.portaldeartesanos.com/emails',
        data: data
      };
      axios(config)
        .then(function () {
          Swal.fire({
            title: 'confirmación',
            text: `Tu mensaje ha sido enviado, gracias por comunicarte con nosotros`,
            icon: 'success',
            confirmButtonText: 'Continuar'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }
          })
        })
        .catch(function (error) {
          Swal.fire({
            title: "Error de envio",
            text: 'Por favor complete el formulario en su totalidad.',
            icon: 'error',
            confirmButtonText: 'Continuar'
          }),
          console.log(error);
        });
    }
    function handleSubmit(e){
      e.preventDefault()
      sendNotification()
      
      }
    return (
      <>
      <div className="Container-escribenos">
        <div className="title">ESCRÍBENOS</div>
        <spam>El gusto es nuestro</spam>
        <p>
          Todos los campos son obligatorios.&nbsp;Recuerda que enviando este
          formulario apruebas estar de acuerdo con la
          <a target="_blank" href="https://crepesywaffles.com/informaciondeinteres"> </a>
          <a target="_blank" href="https://crepesywaffles.com/informaciondeinteres">
            Ley de Protección de Datos Personales
          </a>
          <a target="_blank" href="https://crepesywaffles.com/informaciondeinteres">.</a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="webform">
            <div className="input-escribenos">
              <label >país</label>
                <br />
                <select className="select-label" onChange={handleChangePais}>
                  <option>Seleccione un país</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Chile">Chile</option>
                  <option value="España">España</option>
                  <option value="Panama">Panama</option>
                </select>
            </div>
            <div className="input-escribenos">
              <label>Nombre y Apellidos</label>
              <input
                id="edit-nombre-"
                name="nombre"
                value={nombre}
                size="60"
                maxlength="128"
                required="required"
                aria-required="true"
                onChange={handleChangeName}
              ></input>
            </div>
            <div className="input-escribenos">
              <label>Correo electrónico</label>
              <input
                id="edit-correo-"
                name="correo_"
                value={correo}
                size="60"
                maxlength="128"
                required="required"
                onChange={handleChangeEmail}
              ></input>
            </div>
            <div className="input-escribenos">
              <label>Contacto</label>
              <input
                id="edit-contacto-"
                name="contacto_"
                value={asunto}
                size="60"
                maxlength="128"
                required="required"
                onChange={handleChangeAsunto}
              ></input>
            </div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
      <FooterLink/>
      </>
    );
}
