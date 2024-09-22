import { useState, useEffect } from "react";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
export default function Logout() {
  VerifyLogin();
  
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let navigate = useNavigate();

  useEffect(() =>{
        //delete cookie adminid 
        removeCookie('adminid');
        navigate("/");
        //display login screen
  })
  return (<></>);
}