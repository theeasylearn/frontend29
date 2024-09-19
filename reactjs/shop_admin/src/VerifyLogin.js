import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
export default function VerifyLogin()
{
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    console.log('admin id ' + cookies['adminid']);
    useEffect(() => {
        if (cookies['adminid'] === undefined) {
            navigate("/");
        }
    }, [cookies, navigate]); 
}