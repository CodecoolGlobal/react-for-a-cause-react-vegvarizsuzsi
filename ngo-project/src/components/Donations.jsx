import { useState } from "react";
import './bees.css'

function Donations() {


    let [userInfo, setUserInfo] = useState({})
    let [isSubmitted, setisSubmitted] = useState(false)
    let [beeSwarm, setBeeSwarm] = useState([1,2,3])
    function handleInput(e) {
        userInfo[e.target.id] = e.target.value
        setUserInfo(userInfo)

    }
    function handleClick(e) {
        let validDonation = false
        if(userInfo.Donation > 0){
            validDonation = true
        }
        if(validDonation){
        setisSubmitted(true)
        console.log(userInfo)
            if(userInfo.Donation < 10){
                setBeeSwarm([...beeSwarm, 1])
            } 
            else if(userInfo.Donation < 30){
                setBeeSwarm([...beeSwarm, ...beeSwarm])
            }
            else {
                setBeeSwarm([...beeSwarm, ...beeSwarm,...beeSwarm])
            }
            console.log(beeSwarm);
        } 
       
        else {
            alert('Please enter a valid donation')
        }
    }

    return !isSubmitted?(
        <>
            <div className="contact" id="contact">
                <div className="containar">
                    <label className="label" id="Donate" >Name</label>
                    <input className="donationform" id="Name" onInput={(e) => handleInput(e)}></input>
                    <label className="label">Donation*</label>
                    <input className="donationform" id="Donation" type='number' min='1' onInput={(e) => handleInput(e)}>
                        
                    </input>
                    <label className="label">Email</label>
                    <input className="donationform" id="Email" onInput={(e) => handleInput(e)}></input>
                    <label className="label">Comment</label>
                    <textarea className="donationform" id="Comment" onInput={(e) => handleInput(e)}></textarea>
                    <button onClick={(e)=>handleClick(e)}>Send Donation</button>
                    </div>
            </div>
        </>

    ):(
        <>
        <div className="contact" id="Donate">
        {beeSwarm.map((el, index)=> (
        <image src="https://cdn.discordapp.com/attachments/1035185289150345347/1077577807061856356/toppng.com-bee-png-image-background-bee-stock-473x318.png" 
        key={index} style={{"left": `${Math.random()*index*100}px`, "position": "relative", "top": `${Math.random()*index*20}px`, "transform":`rotate(${Math.random()*360}deg)` }} className="bees"></image>))}
        </div>
        </>
    )
}

export default Donations;