import { useState } from "react";
export function RSVP() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [attend, setAttend] = useState(false);

    function handleRadioChange(value) {
        setAttend(value);
        console.log(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const response = {
            firstName,
            lastName,
            email,
            attend,
        }
        console.log(response);
    }
    return(
        <div className="rsvp">
            <div className="title"><h3>RSVP</h3></div>
            <hr></hr>
            <div>
                <p>RSVP by January 2025</p>
            </div>
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
        </div>
    )
}