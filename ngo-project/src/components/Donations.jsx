import { useState } from "react";

function Donations() {

    let [userInfo, setUserInfo] = useState([])
    function handleInput(e) {
        userInfo[e.target.id] = e.target.value
        setUserInfo(userInfo)

    }
    function handleClick(e) {
        if (e.target.className)
            console.log(userInfo);
    }

    return (
        <>
            <div className="contact" id="contact">                
                    <label className="label" id="Donate" >Name:</label><br></br>
                    <input className="donationform" id="Name" onInput={(e) => handleInput(e)}></input><br></br>
                    <label className="label">Donation:</label><br></br>
                    <input className="donationform" id="Donation" onInput={(e) => handleInput(e)}></input><br></br>
                    <label className="label">Email*:</label><br></br>
                    <input className="donationform" id="Email" onInput={(e) => handleInput(e)}></input><br></br>
                    <label className="label">Comment*:</label><br></br>
                    <textarea className="donationform" id="Comment" onInput={(e) => handleInput(e)}></textarea><br></br>
                    <button onClick={(e) => handleClick(e)}>Send Donation</button>
                    <div>Fields marked with * are optional, champ</div>                
            </div>
        </>

    )
}

export default Donations;