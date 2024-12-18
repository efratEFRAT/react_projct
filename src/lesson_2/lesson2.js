import { useEffect, useState } from "react";

export default function FromPizza() {

    const [pizza, setPizza] = useState([]);
    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch('http://localhost:5046/WeatherForecast/getPizzaList'); // Correct 'fetch' here
               
                const data = await response.json();
                setPizza(data);
            }
            catch (error) {
                
            }
        };
        fetchPizza();
    }, [])

    return (
        <>
          {pizza.map(p =>(
           <p>{p.name}{p.id}{p.isGluten}</p>   
          )
            )};
        </>

    )

}
