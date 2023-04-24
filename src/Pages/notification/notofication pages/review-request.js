import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import '../notification.css'


export default function ReviewRequest() {
  const[request, setRequest] = useState([
    {
      requestID:'#001',
      reviewedPerson:'Dr. Matheesha Pathirana',
      requestOpened:'24th Oct 2023',
      reviewedCount: '34'
    },
    {
      requestID:'#002',
      reviewedPerson:'Dr. Matheesha Pathirana',
      requestOpened:'24th Oct 2023',
      reviewedCount: '31'
    },
    {
      requestID:'#003',
      reviewedPerson:'Dr. Matheesha Pathirana',
      requestOpened:'24th Oct 2023',
      reviewedCount: '45'
    },
    {
      requestID:'#004',
      reviewedPerson:'Dr. Matheesha Pathirana',
      requestOpened:'24th Oct 2023',
      reviewedCount: '34'
    },
    {
      requestID:'#005',
      reviewedPerson:'Dr. Matheesha Pathirana',
      requestOpened:'24th Oct 2023',
      reviewedCount: '24'
    }
  ])
  return (
    <div>
       <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>

    <div>
      
          <h2 className='notification-page-participate-content-title'>Reviewed Requests</h2>
          <table className='notification-page-participate-content'>
            { request.map((data,id)=>(
              <tr className='notification-page-participate-row'>
                  <td className='notification-page-participate-data'>
                    Request Number
                    <p className='notification-page-participate-data-item'>{data.requestID}</p>
                  </td>
                  <td className='notification-page-participate-data'>
                    Reviewed by
                   <p className='notification-page-participate-data-item'> {data.reviewedPerson}</p>
                  </td>
                  <td className='notification-page-participate-data'>
                    Request Opened
                    <p className='notification-page-participate-data-item'>{data.requestOpened}</p>
                  </td>
                  <td className='notification-page-participate-data' style={{marginRight:'2rem'}}>
                    Reviewed Count
                    <p className='notification-page-participate-data-item'>{data.reviewedCount}</p>
                  </td>
                  <hr/>
              </tr>
            ))}
          </table>
      </div>

      </div>
   
  )
}
