import './style.css'
import {useState,useEffect} from 'react'
import {
    Link
} from 'react-router-dom'


export default function Accueil() {
const [annonces,setAnnonces]=useState([])

useEffect(()=>{
fetch('https://titi.startwin.fr/logements')
.then(res=>res.json())
.then((data)=>
setAnnonces(data.splice(0,3)))

},[])
    return (
        <main className="Accueil">
           
            <h1>Bienvenue chez Prepagence Immo</h1>
            
           
            <section>
            {annonces.map((annonce,index)=>
            <div className="annonce">
            <img src={annonce.cover} alt={annonce.cover} />
            <h5>{annonce.title}</h5>
            <p>Description : {annonce.description}</p>
            <Link to={"/detail/"+index}>En savoir plus</Link>
                       </div>
            )}
           
           </section>
        </main>
    )
}