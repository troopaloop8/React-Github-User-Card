import React from 'react'

function GitCard(props) {

    
    console.log("card data", props.GitCard)
    return (
        
            <div className="card">
                <img src={props.GitCard.avatar_url}/>
                <div className="card-info">
                    <h3 className="name">{props.GitCard.name}</h3>
                    <p className="username">{props.GitCard.login}</p>
                    <p>Location: {props.GitCard.location}</p>
                    <p>Profile:<a href={props.GitCard.html_url}>{props.GitCard.html_url}</a></p>
                    <p>Followers: {props.GitCard.followers}</p>
                    <p>Following: {props.GitCard.following}</p>
                    <p>Bio: {props.GitCard.bio}</p>
                </div>
            </div>
        
    )
}

export default GitCard

