import './style.css'
import {Link} from 'react-router-dom'
import{useState,useEffect} from 'react'



export default function Annonces() {
    const [annonces,setAnnonces]=useState([])

    useEffect(()=>{
    fetch('https://titi.startwin.fr/logements')
    .then(res=>res.json())
    .then((data)=>
    setAnnonces(data)
    )
    
    },[])
    return (
        <main className="vosannonces">
            <h3>Votre futur foyer est peut-être là</h3>
            <section>
            {annonces.map((annonce,index)=>  (
           <div className="annonce">
<img src={annonce.cover} alt={annonce.title} />
<h5>{annonce.title}</h5>
<p>{annonce.description}</p>
<Link to={"/detail/"+ index}>En savoir plus</Link>
           </div>
))}
           
           </section>
            
           
        </main>
    )
}