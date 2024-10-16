import { useState } from "react";
import { colRef } from "./firebase.js";
import { getDocs, addDoc } from "firebase/firestore";

export function RSVP() {
    const [list, setList] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [attend, setAttend] = useState(false);
    const [response, setResponse] = useState(true);

    function handleRadioChange(value) {
        setAttend(value);
        console.log(value);
    }
    // function displayList() {
    //     getDocs(colRef).then(data => {
    //         // console.log(data.docs)
    //         const documents = data.docs.map(doc => ({
    //             // console.log(doc.data().attend)
    //            id: doc.id,
    //            ...doc.data() 
    //         }))
    //         setList(documents);
    //     })
    // }
    function handleSubmit(e) {
        e.preventDefault();
        const response = {
            firstName,
            lastName,
            email,
            attend,
        }
        addDoc(colRef, response)
        .then(()=>console.log("Added Success...!"))
        .catch(err=>console.log(err))
        .finally(()=>{
            setFirstName('');
            setLastName('');
            setEmail('');
            setAttend(null);
            setResponse(false)
        })

        getDocs(colRef).then(data => {
            // console.log(data.docs)
            const documents = data.docs.map(doc => ({
                // console.log(doc.data().attend)
               id: doc.id,
               ...doc.data() 
            }))
            setList(documents);
        })

    }
    return(
        <div className="rsvp">
            <div className="title"><h3>RSVP</h3></div>
            <hr></hr>
            <div>
                <p>RSVP by January 2025</p>
            </div>
            {response ? <>
            <div>
                <form className="rsvp-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-field"><label>Name (required)</label></div>
                        <div className="form-field">
                            <input type="text" name="first-name" placeholder="John" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                            <input type="text" name="last-name" placeholder="Smith" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-field"><label>Email (required)</label></div>
                        <div className="form-field">
                            <input type="email" name="email" placeholder="john.smith@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <p>Will you be attending? (Required)</p>
                    <div className="form-row">
                        <div className="form-field"><label for="yes"> <input type="radio" id="yes" name="attending" value={attend} onChange={()=>handleRadioChange("Yes")} />Yes, I'll be there!</label></div>
                        <div className="form-field"><label for="no"> <input type="radio" id="no" name="attending" value={attend} onChange={()=>handleRadioChange("No")}/>No, I won't be able to attend.</label></div>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
                <p>Please note that only RSVP's from invited guests will be attended to...!</p>
            </div>
            <div>
                <button className="btn">List</button>
                {list.map(li => {
                    <div><span>{li.firstName}</span></div>
                })}
            </div>
            </> : <div className="thank-you-message">
                <h3>Thank you for your Response...!</h3>
                <a href="#" className="btn btn-0">Home</a>
            </div>}
        </div>
    )
}