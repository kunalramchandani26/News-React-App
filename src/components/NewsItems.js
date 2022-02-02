import React from 'react'

export default function NewsItems(props) {
    return (
        <div className="container my-5">
            <div className="card">
                <img src={props.urlToImage} alt="News" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
