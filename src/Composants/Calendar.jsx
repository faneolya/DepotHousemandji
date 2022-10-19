
import React from 'react';
import "./Calendar.css";



export default function Calendrier() {

  return (
    <div className='mere'>
    <div className='top'>
    <div className=''>
      <input type="date" name="entrée" id="" placeholder='Date d'arrivée />
      <input type="date" name="départ" id="" placeholder='Date d'arrivée />
    </div> 
    </div>
    <div className='mere2'>
    <div> <span>Date</span></div> 
     <div className='mar'><span>21 Octobre 2022</span> <span>-</span> <span>23 Octobre 2022</span></div>
      <div className='mar' ><span>Invites</span></div>
      <span>Adultes</span><select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>

      </select>
      <span className='fatherinpt mar'>Enfants</span><select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>

      </select>
    <div className='mar'><span>Chambres</span></div>
        <div>
          <select className='children' name="" id="">
            <option value="">1 Chambre</option>
            <option value="">2 Chambres</option>
            <option value="">3 Chambres</option>
            <option value="">4 Chambres</option>
            <option value="">5 Chambres</option>

          </select>
        </div>

    </div>
    <button className='mar2'>Suivant</button>

    </div>
  );
}