import React from 'react';

//Declare API UREL that we want to call 
const API_URL = 'https://bounty-api-brandi.herokuapp.com/v1/bounties/'



const Poster = props => {

    const handleDelete = () => {
        console.log('deleting', props.bounty.name)
        fetch(API_URL + props.bounty._id, {
            method: 'DELETE'
        })
        .then(response => response.status === 204 ? {} : response.json )
        .then(() => {
            console.log('Successful Delete')
            props.refresh()
        })
    }

    let more = <button onClick={() => props.changeCurrent(props.bounty)}>More</button>
    let less = <button onClick={() => props.changeCurrent({})}>Less</button>
    let button = props.bounty._id === props.currentId ? less : more

    return (
        <div className ='poster'>
            <h1>Wanted</h1>
            <h2>{props.bounty.name}</h2>
            <h3>Reward: {props.bounty.reward}</h3>
            {button}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Poster