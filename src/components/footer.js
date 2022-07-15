import React from "react";
import Imagen5 from "../assets/img/5.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";




export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-izquierda">
        <a><img src={Imagen5} className="logo"></img></a>
      </div>
      <div className="footer-centro">
        <p>Jhon Sebastian Navas</p>
        <p>ADSI 2341224</p>
        <p>CBI Palmira</p>
      </div>
      <div className="footer-derecha">
          <a href=""></a> <BsFacebook size ={40} className="imagen"/>
          <BsInstagram size ={40} className="imagen"/>
          <BsTwitter size ={40} className="imagen"/>
          <BsGithub size ={40} className="imagen"/>

      </div>
    </div>
  );
};
