import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import '../notification.css'


export default function Participate() {
  const[session, setSession] = useState([
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    },
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    },
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    },
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    },
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    },
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    },
    {
      consultant:'Dr. Anura Dhanush Perera',
      date:'24th Oct 2023',
      duration: '5h 40min',
      regarding:'Job seeking'
    }
  ])
  return (
    <div>
       <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>

    <div>
      
          <h2 className='notification-page-participate-content-title'>Consultant sessions you have joined</h2>
          <table className='notification-page-participate-content'>
            { session.map((data,id)=>(
              <tr className='notification-page-participate-row'>
                  <td className='notification-page-participate-data'>{data.consultant}</td>
                  <td className='notification-page-participate-data'>{data.date}</td>
                  <td className='notification-page-participate-data'>{data.duration}</td>
                  <td className='notification-page-participate-data'>{data.regarding}</td>
                  <hr/>
              </tr>
            ))}
          </table>
      </div>

      </div>
   
  )
}
