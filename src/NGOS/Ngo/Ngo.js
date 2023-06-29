import React, { useEffect, useState } from "react"
import image from './tesla.jpg'
import { useParams } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Ngo = (props) => {
    

    return (
        
        <div className="card" style={{
            width: '18rem', color: 'rgb(49, 84, 159)', margin: '40px 24px',boxShadow: '2px 2px 4px 2px skyblue',border:'none'
        }}>
            <div className="logo" style={{
                width: '40%',
                margin: '30px auto 9px auto',
                height: 'fit-content'
            }}>
                <img style={{
                    height: '113px',
                    borderRadius: '10px'
                }} src={image} className="card-img-top" alt="..." />
            </div>

            <div className="card-body" >
                <h5 className="card-title" style={{textTransform:'uppercase'}}>{props.ngo.name}</h5>
                {/* <p className="card-text" style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {props.ngo.tags.map((tag, index) => (

                        <h4><span class="badge bg-secondary" style={{
                            margin: '4px',
                            fontWeight: 500,
                            fontSize: 'medium'
                        }}>hello</span></h4>

                    ))}


                </p> */}
                <div style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
                    <div className="btn btn-primary" style={{
                        width: '5.5rem',
                        height: 'fit-content',
                        border: 'none',
                        borderRadius: '27px',
                        padding: '2px 10px',
                        fontWeight: 'unset',
                        margin: '0px 16px',
                        background: '#bffbf5',
                        color: '#002285',
                        fontSize: '15px'
                    }}>{props.ngo.members} <PeopleAltIcon style={{fontSize: '18px',
                    marginTop: '-2px'}}/></div>

                    <a href={props.ngo.website}><div className="btn btn-primary" style={{
                        width: '5.5rem',
                        height: 'fit-content',
                        color: '#002285',
                        background: '#bffbf5',
                        border: 'none',
                        borderRadius: '27px',
                        padding: '2px 10px',
                        fontWeight: 'unset',
                        margin: '0px 16px'
                    }}>visit  <VisibilityIcon style={{fontSize: '18px',
                        marginTop: '-2px'}}/></div></a>
                </div>
            </div>
        </div>
    )
}

export default Ngo