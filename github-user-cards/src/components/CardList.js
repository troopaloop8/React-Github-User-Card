import React from 'react'
import GitCard from './GitCard';

function CardList(props) {
    console.log("CardList.js props",props)
    return (
        <div>
            <h2>Github meta for {props.userData.name}</h2>
            <GitCard GitCard={props.userData}/>
            <h2>{props.userData.name} follows these coders:</h2>
            <div>
                {props.followData.map(user => (
                    <GitCard key={user.id} GitCard={user}/>
                ))}
            </div>
        </div>
    )
}

export default CardList
