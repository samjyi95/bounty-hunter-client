import React, { useState } from 'react';

//Declare API UREL that we want to call 
const API_URL = 'https://bounty-api-brandi.herokuapp.com/v1/bounties/'

const BountyForm = props => {
    let[name, setName] = useState('')
    let [client, setClient] = useState('')
    let [hunters, setHunters] = useState('')
    let [reward, setReward] = useState('')
    let [ship, setShip] = useState('')
    let [wantedFor, setWantedFor] = useState('')
   
    const submit = e => {
        e.preventDefault()
        console.log('Submit!')
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                name, 
                client,
                hunters: hunters.split(',').map(h => h.trim()),
                reward,
                ship,
                wantedFor
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => {
            console.log('bounty was created')
            // refresh the bounties 
            props.refresh()
            //clear the state variables 
            setName('')
            setClient('')
            setWantedFor('')
            setReward('')
            setShip('')
            setHunters('')
        })
    }

    return (
        <div className="bounty-form">
            <h3> submit yo bounties</h3>
            <form onSubmit={submit}>
                <div>
                    <label>Name:</label>
                    <input name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Wanted For:</label>
                    <input name="wantedFor"
                        value={wantedFor}
                        onChange={e => setWantedFor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Client:</label>
                    <input name="client"
                        value={client}
                        onChange={e => setClient(e.target.value)}
                    />
                </div>
                <div>
                    <label>ship:</label>
                    <input name="ship"
                        value={ship}
                        onChange={e => setShip(e.target.value)}
                    />
                </div>
                <div>
                    <label>Reward:</label>
                    <input name="reward"
                        value={reward}
                        onChange={e => setReward(e.target.value)}
                    />
                </div>
                <div>
                    <label>Hunters (Comma-Seperated List):</label>
                    <input name="hunters"
                        value={hunters}
                        onChange={e => setHunters(e.target.value) }
                    />
                </div>
                <input type="submit" value="Make it bountiful"  />
            </form>
        </div>
    )
}

export default BountyForm