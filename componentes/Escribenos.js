import React from "react";

export default function Escribenos() {
  return (
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
      <form>
        <div className="webform">
          <div className="input-escribenos">
            <label >pais</label>
              <br />
              <select className="select-label">
                <option>Seleccione un pais</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogota">Bogotá (cundinamarca)</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
              </select>
          </div>
          <div className="input-escribenos">
            <label>Nombre y Apellidos</label>
            <input
              id="edit-nombre-"
              name="nombre_"
              value=""
              size="60"
              maxlength="128"
              required="required"
              aria-required="true"
            ></input>
          </div>
          <div className="input-escribenos">
            <label>Correo electrónico</label>
            <input
              id="edit-nombre-"
              name="nombre_"
              value=""
              size="60"
              maxlength="128"
              required="required"
              aria-required="true"
            ></input>
          </div>
          <div className="input-escribenos">
            <label>Asunto</label>
            <input
              id="edit-nombre-"
              name="nombre_"
              value=""
              size="60"
              maxlength="128"
              required="required"
              aria-required="true"
            ></input>
          </div>
          <div className="input-escribenos">
            <label>Mensaje</label>
            <textarea
              className="form-control "
              type="text"
              required
              spellCheck
              size="60"
              name="mensaje"
              rows="15"
            ></textarea>
          </div>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}
