import React from 'react'
import GitCard from './GitCard';


function CardList(props) {
    console.log("CardList.js props",props)
    return (
        <div className="cards">
            <h2 className="header"> Github meta for {props.userData.name}</h2>
            <div >
            <GitCard GitCard={props.userData}/>
            </div>
            
            <h2 className="header">{props.userData.name} follows these coders:</h2>
            <div >
                {props.followData.map(user => (
                    <GitCard  key={user.id} GitCard={user}/>
                ))}
            </div>
        </div>
    )
}

export default CardList
