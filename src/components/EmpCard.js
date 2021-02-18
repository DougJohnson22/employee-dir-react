import React from 'react'

export default function EmpCard(props) {

    return (
        
        <div className="card col-3 m-3">
            <img src={props.data.picture.large} className="card-img-top" alt={props.data.name.first} />
            <div className="card-body">
                <h5 className="card-title">{props.data.name.title} {props.data.name.first} {props.data.name.last}</h5>
                <p className="card-text">Age: {props.data.dob.age}</p>
                <p className="card-text">Location: {props.data.location.city}, {props.data.location.country}</p>
                <p className="card-text">Email: {props.data.email}</p>
                <p className="card-text">Username: {props.data.login.username}</p>
                <p className="card-text">Password: {props.data.login.password}</p>
            </div>
        </div>
    )
}
