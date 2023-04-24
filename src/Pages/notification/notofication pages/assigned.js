import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import done_job from '../../../Assets/done_job.jpg';
import '../notification.css'

// sample images for the array dummy data
import companyImg1 from '../../../Assets/wso2.png'

export default function Assigned() {
  const[consultant, setConsultant] = useState([
    {
      name:'Dr. Anura Dhanush Perera',
      position:'Senior Software Architect',
      company: '99X Technologies',
    },
    {
      name:'Dr. Danith Dhanush Perera',
      position:'Senior Software Architect',
      company: '99X Technologies',
    },
    {
      name:'Dr. Vihanga Dhanush Perera',
      position:'Senior Software Architect',
      company: '99X Technologies',
    },
    {
      name:'Dr. Danith Dhanush Perera',
      position:'Senior Software Architect',
      company: '99X Technologies',
    },
    {
      name:'Dr. Vihanga Dhanush Perera',
      position:'Senior Software Architect',
      company: '99X Technologies',
    },
  ])
  return (
    <div>
       <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>

    <div className='notification-page-content'>
       <div className='notification-page-left-content'>
          <img src={done_job} className='notification-page-left-content-img'/>
       </div>
       <div className='notification-page-right-content'>
          <h2 className='notification-page-right-content-title'>Your Assigned Consultants</h2>
          <div className='notification-page-assigned-card-content'>
            { consultant.map((data,id)=>(
              <div className='notification-page-assigned-card'>
                  <h5 className='notification-page-card-text'>{data.name}</h5>
                  <hr/>
                  <h6 className='notification-page-card-text'>{data.position}</h6>
                  <p className='notification-page-card-text'>{data.company}</p>
              </div>
            ))}
          </div>
      </div>

      </div>
    </div>
  )
}
