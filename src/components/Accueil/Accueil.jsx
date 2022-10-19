import React from "react"
import Capture from "./Capture.PNG";
import "./Accueil.css";



export const Accueil = () => {
  return (
    <div >
      <div className="accueil">
        <img className="logo" src={Capture} alt="" />
      </div>
      <div className="h2">
        <h2>HOUSE MANDJI</h2>
      </div>
      <div className="h3">
        Sentez-vous comme chez vous!!!
      </div> <br></br>
      <button className='exp'>Explorons</button>
    </div>


  )
}
export default Accueil