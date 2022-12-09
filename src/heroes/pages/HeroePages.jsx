import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroePages = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();

  const heroe =  useMemo(() => getHeroById( id ), [id]);

  const onNavigateBack = () => {

    // navigate('/marvel');
    navigate(-1); // go back (history
  }



  if(!heroe){
    return <Navigate to='/marvel'/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${id}.jpg`} 
          alt={heroe.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft" />

      </div>

      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Alter ego: {heroe.alter_ego}</li>
          <li className="list-group-item">Publisher: {heroe.publisher}</li>
          <li className="list-group-item">First appearance: {heroe.first_appearance}</li>
        </ul>
        <h5 className="col-3">Characters</h5>
        <p>{heroe.characters}</p>

        <button
          className="btn btn-primary"
          onClick={ onNavigateBack }>
            Regresar
        </button>
      </div>

    </div>
  )
}
