import { useState } from "react"
import img1 from '../assert/1.jpg'
import img2 from '../assert/2.jpg'
import img3 from '../assert/3.jpg'
import img4 from '../assert/4.jpg'
import img5 from '../assert/5.jpg'

export default function DisplayIndex(){
    const[imges]=useState([img1,img2,img3,img4,img5])
    const[index,setIndex]=useState(0)
    const end= ()=>{
       if(index<imges.length-1) 
        setIndex(index+1);
    }
    const start= ()=>{
        if(index>0) 
         setIndex(index-1);
     }
return(
    <>
        <button onClick={start} disabled={index === 0}>←</button>
        <button onClick={end} disabled={index === imges.length - 1}>→</button>
         <img src={imges[index]} alt={`Image ${index + 1}`}/>
    </>
);
}

// import { useState } from "react";
// import img1 from '../assert/1.jpg';
// import img2 from '../assert/2.jpg'; // Ensure each image is different
// import img3 from '../assert/3.jpg';
// import img4 from '../assert/4.jpg';
// import img5 from '../assert/5.jpg';

// export default function DisplayIndex() {
//     const [images, setImages] = useState([img1, img2, img3, img4, img5]);
//     const [index, setIndex] = useState(0);

//     const nextImage = () => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to start
//     };

//     const prevImage = () => {
//         setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to end
//     };

//     return (
//         <>
//             <button onClick={prevImage}>←</button>
//             <button onClick={nextImage}>→</button>
//             <img src={images[index]} />
//         </>
//     );
// }
