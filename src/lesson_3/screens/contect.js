import {useNavigate} from 'react-router-dom'
import img from "../assert/צילום מסך 2025-01-08 020227.png"
export default function Contect(){

        const  navigate = useNavigate();
        const gotothankyou = ()=>{
        navigate("/thank")
        }
return( <>

     <button onClick={gotothankyou}>צור קשר</button>
        <img src={img} alt></img>
        </>
        
);
}