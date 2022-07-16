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
        <div className="iconos">
        <a href=""><BsFacebook size ={30} className="imagen"/></a>
          <a href=""><BsInstagram size ={30} className="imagen"/></a>
          <a href=""><BsTwitter size ={30} className="imagen"/></a>
          <a href=""><BsGithub size ={30} className="imagen"/></a>
        </div> 
      </div>
    </div>
  );
};
