import img from '../assert/שניצלונים.jpg'

export default function NewPrint(props){
 return (<div>
    <h1> nice to meet you </h1>
    <p>my name: {props.name} and my age: {props.age}</p>
    <img src={img}></img>
    </div> )
}