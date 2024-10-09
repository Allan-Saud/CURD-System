import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import DescriptionIcon from '@mui/icons-material/Description';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import allanImage from './images/allan.jpg';
import prayagImage from './images/prayag.jpg';
import rajuImage from './images/raju.jpg';

import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {

    const navigate = useNavigate();

    const [getuserdata, setuserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("")
    console.log(id);
    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {

            console.log("error");
        } else {
            setuserdata(data);
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata()
    }, [])


    const getImageByUserName = (name) => {
        if (name === 'Allan Saud') {
            return allanImage;
        }
        else if (name === 'Raju Shrestha') {
            return rajuImage;
        } else {
            return prayagImage; // Default image
        }
    }





    return (
        <div className='container mt-3'>
            <Typography variant="h3" style={{ fontStyle: "italic", fontWeight: 600, textAlign: 'center', marginBottom: '20px' }}>
               Welcome {getuserdata.name}
            </Typography>
            <Card sx={{ maxWidth: 600, margin: '0 auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <img src={getImageByUserName(getuserdata.name)} style={{ width: '150px', height: '150px', borderRadius: '50%' }} alt='profile' />
                        {/* <div style={{ marginLeft: '10px' }}>
                            <button className="btn btn-primary" ><BorderColorIcon /></button>
                            <button className="btn btn-danger" style={{ marginLeft: '5px' }}><DeleteIcon /></button>
                        </div> */}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <Typography variant='h5' style={{ marginBottom: '12px', fontWeight: 600 }}>{getuserdata.name}</Typography>
                        <Typography variant='body1'><b>Age:</b> {getuserdata.age}</Typography>
                        <Typography variant='body1'><EmailIcon style={{ marginRight: '8px' }} /><b>Email:</b> {getuserdata.email}</Typography>
                        <Typography variant='body1'><WorkIcon style={{ marginRight: '8px' }} /><b>Occupation:</b> {getuserdata.work}</Typography>
                        <Typography variant='body1'><SendToMobileIcon style={{ marginRight: '8px' }} /><b>Mobile:</b> {getuserdata.mobile}</Typography>
                        <Typography variant='body1'><EditLocationIcon style={{ marginRight: '8px' }} /><b>Location:</b> {getuserdata.address}</Typography>
                        <Typography variant='body1'><DescriptionIcon style={{ marginRight: '8px' }} /><b>Description:</b> {getuserdata.description}</Typography>
                        <button className="btn btn-success" onClick={() => navigate('/')} style={{ justifyContent:'center' }}>OK</button>
                    </div>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default Details;
