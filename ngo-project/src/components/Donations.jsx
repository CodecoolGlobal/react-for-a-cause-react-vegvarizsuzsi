import { useState } from "react";

function Donations() {


    let [userInfo, setUserInfo] = useState([])
    let [isSubmitted, setisSubmitted] = useState(false)
    function handleInput(e) {
        userInfo[e.target.id] = e.target.value
        setUserInfo(userInfo)

    }
    function handleClick(e) {
        setisSubmitted(true)
        let donatedAmount = userInfo.Donation
        if(donatedAmount < 100){
            alert('broooo');
        }
        console.log(userInfo.Donation);
        if (e.target.className)
            console.log(userInfo);
    }

    return !isSubmitted?(
        <>
            <div className="contact" id="contact">
                <div className="containar">
                    <label className="label" id="Donate" >Name</label>
                    <input className="donationform" id="Name" onInput={(e) => handleInput(e)}></input>
                    <label className="label">Donation </label>
                    <input className="donationform" id="Donation" onInput={(e) => handleInput(e)}>
                        
                    </input>
                    <label className="label">Email*</label>
                    <input className="donationform" id="Email" onInput={(e) => handleInput(e)}></input>
                    <label className="label">Comment*</label>
                    <textarea className="donationform" id="Comment" onInput={(e) => handleInput(e)}></textarea>
                    <button onClick={(e)=>handleClick(e)}>Send Donation</button>
                    <div>Fields marked with * are optional, champ</div>
                    </div>
            </div>
        </>

    ):(
        <>
        <div className="contact" id="Donate">TY</div>
        </>
    )
}

export default Donations;