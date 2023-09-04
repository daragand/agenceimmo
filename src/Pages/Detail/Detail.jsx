import "./style.css";
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function AnnonceDetail() {
    const {id}=useParams()
    const [annonces,setAnnonces]=useState([])
    const [Detail, setDetail] = useState();

    useEffect(()=>{
    fetch('https://titi.startwin.fr/logements')
    .then(res=>res.json())
    .then((data)=>
    setAnnonces(data)
    )
    },[])
    useEffect(() => {
        const selectedAnnonce = annonces.find(annonce => annonce.id === parseInt({id}));
        setDetail(selectedAnnonce);
      }, [annonces, id]);


  return (
    <main>
      <article>
      {Detail && (
        <h4>{Detail.title}</h4>
      )}
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt=""
        />
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt=""
        />
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt=""
        />
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt=""
        />
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt=""
        />
        <div>
          <h6>729000 €</h6>
          <h6>
            Paris 15ème - 4 pièces - 3 chambres - 58<sup>2</sup>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            corrupti eos assumenda nostrum voluptates consequuntur pariatur
            aliquid voluptatem tenetur suscipit quae dignissimos voluptatum eum
            quis autem non dolores, aperiam excepturi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Maiores, at cumque dolorem maxime
            sequi ipsa fugiat quidem odit eius, labore porro in consequatur
            perspiciatis fugit a? Provident voluptatem exercitationem accusamus.
          </p>
          <ul><li>Equipements :</li>
        <ul>
        <li>Équipements de base</li>
        <li>Micro-Ondes</li>
        <li>Douche italienne</li>
        <li>Frigo</li>
        <li>WIFI</li>
        </ul>
    </ul>
    
        </div>
        
      </article>
    </main>
  );
}
