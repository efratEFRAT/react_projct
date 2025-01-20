import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function Contect(){

        const  navigate = useNavigate();
        const gotothankyou = ()=>{
        navigate("/thank")
        }
        const{t}=useTranslation();
return( <>
     
     <h1>{t('contect.h1')}</h1>
     <button onClick={gotothankyou}>{t('contect.button')}</button>
      
        </>
        
);
}