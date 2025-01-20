import { useTranslation } from "react-i18next";
import img1 from "../assert/1.png"
export default function Galery(){
    const{t}=useTranslation();
return( 
   <>
   <h1>{t('galery.h1')}</h1>
 <img src={img1}alt></img>
 </> 

);
}