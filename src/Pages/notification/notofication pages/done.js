import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import done_job from '../../../Assets/done_job.jpg';
import '../notification.css'

// sample images for the array dummy data
import companyImg1 from '../../../Assets/wso2.png'

export default function Done() {
  const[appliedjob, setAppliedJob] = useState([
    {
      jobtitle:'Senior Devops Engineer',
      jobImgUrl: companyImg1,
    },
    {
      jobtitle:'Senior Devops Engineer',
      jobImgUrl: companyImg1,
    },
    {
      jobtitle:'Senior Devops Engineer',
      jobImgUrl: companyImg1,
    },
    {
      jobtitle:'Senior Devops Engineer',
      jobImgUrl: companyImg1,
    },
    {
      jobtitle:'Senior Devops Engineer',
      jobImgUrl: companyImg1,
    },
    {
      jobtitle:'Senior Devops Engineer',
      jobImgUrl: companyImg1,
    }
  ])
  return (
    <div>
       <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>

    <div className='notification-page-content'>
       <div className='notification-page-left-content'>
          <img src={done_job} className='notification-page-left-content-img'/>
       </div>
       <div className='notification-page-right-content'>
          <h2 className='notification-page-right-content-title'>Applied Jobs</h2>
          <div className='notification-page-card-content'>
            { appliedjob.map((data,id)=>(
              <div className='notification-page-card'>
                  <img className='notification-page-card-img' src={data.jobImgUrl}/>
                  <h6 className='notification-page-card-title'>{data.jobtitle}</h6>
              </div>
            ))}
          </div>
      </div>

      </div>
    </div>
  )
}
