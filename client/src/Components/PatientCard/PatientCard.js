import React, { useEffect, useState } from 'react'
import './PatientCard.css'
import { useParams } from 'react-router-dom';


export default function PatientCard() {
    const [patientdata, setPatientdata] = useState([])
    const params = useParams();
    console.log(params)
    useEffect(() => {
        const getData = async()=>{
            try {
                const response = await fetch(`http://localhost:4001/getPatient/${params.id}`)
                const data = await response.json();
                    console.log(data)
                    setPatientdata(data.result);
            } catch (error) {
                console.log(error)
            }
            finally{
            }
        }
        getData()
    }, [])

    useEffect(()=>{
        console.log(patientdata)
    },[patientdata])
    

  return (
    <div>
    <div className='userdetail'> 
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className='userimage' />

    <div className="userdetailname">
        <div className="namedetails">
            <h2>Name</h2>
            <h4>:</h4>
            <h3>{patientdata.Name}</h3>
        </div>
        <div className="namedetails">
            <h2>Phone Number</h2>
            <h4>:</h4>
            <h3>{patientdata.PhoneNum}</h3>
        </div>
        <div className="namedetails">
            <h2>Age</h2>
            <h4>:</h4>
            <h3>{patientdata.Age} years old</h3>
        </div>
        <div className="namedetails">
            <h2>Blood type</h2>
            <h4>:</h4>
            <h3>{patientdata.Blood}</h3>
        </div>
        <div className="namedetails">
            <h2>Height</h2>
            <h4>:</h4>
            <h3>{patientdata.Height} Centimeter</h3>
        </div>
        <div className="namedetails">
            <h2>Weight</h2>
            <h4>:</h4>
            <h3>{patientdata.Weight} Kg</h3>
        </div>
        <div className="namedetails">
            <h2>Doctor Assigned</h2>
            <h4>:</h4>
            <h3>{patientdata.Doctor}</h3>
        </div>
        <div className="namedetails">
            <h2>Medical Condition</h2>
            <h4>:</h4>
            <h3>{patientdata.Condition}</h3>
        </div>
    </div>
    </div>
    <div className='nextBox'> 
    <div className='nextItem'>
        <div className="detail">
            <h2>Allocate Bed</h2>
            <h4>:</h4>
            <a href="/scan">
                <h3>QR</h3>
            </a>
        </div>
        <div className="detail">
            <h2>Deallocate Bed</h2>
            <h4>:</h4>
            <h3>QR</h3>
        </div>      
    </div>
    </div>
    </div>
  )
}