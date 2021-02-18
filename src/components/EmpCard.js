import React from 'react'
import Style from "./style.css"

export default function EmpCard(props) {

    return (
        <div className="col mb-4">
            <div className="card h-100 border-info">
                <img src={props.data.picture.large} className="card-img-top userImg" alt={props.data.name.first} />
                <div className="card-body">
                    <h5 className="card-header text-white bg-primary">{props.data.name.title} {props.data.name.first} {props.data.name.last}</h5>
                    <br/>
                    <p className="card-title">Location: {props.data.location.city}, {props.data.location.country}</p>
                    <p className="card-text">Age: {props.data.dob.age}</p>
                    <p className="card-text">Email: {props.data.email}</p>
                    <p className="card-text">Username: {props.data.login.username}</p>
                    <p className="card-text">Password: {props.data.login.password}</p>
                </div>
            </div>
        </div>
    )
}
