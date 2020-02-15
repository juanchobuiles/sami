import React from "react";
import "./styles/avatar.css";
const Avatar = props => {
  return (
    <div className="avatar">
      <img src={props.avatar} alt="Foto usuario" className="avatar-image"></img>
      <section className="avatar-section">
        <p>Nombre usuario</p>
        <p>Perfil</p>
        <p>Conenctado</p>
      </section>
    </div>
  );
};

export default Avatar;
