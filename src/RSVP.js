export function RSVP() {

    return(
        <div className="rsvp">
            <div className="title"><h3>RSVP</h3></div>
            <hr></hr>
            <div>
                <p>RSVP by January 2025</p>
            </div>
            <div>
                <form className="rsvp-form">
                    <div className="form-row">
                        <div className="form-field"><label>Name (required)</label></div>
                        <div className="form-field">
                            <input type="text" name="first-name" placeholder="John"/>
                            <input type="text" name="last-name" placeholder="Smith"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-field"><label>Email (required)</label></div>
                        <div className="form-field">
                            <input type="email" name="email" placeholder="john.smith@gmail.com"/>
                        </div>
                    </div>
                    <p>Will you be attending? (Required)</p>
                    <div className="form-row">
                        <div className="form-field"><label for="yes"> <input type="radio" id="yes" name="attending" value="yes" />Yes, I'll be there!</label></div>
                        <div className="form-field"><label for="no"> <input type="radio" id="no" name="attending" value="no" />No, I won't be able to attend.</label></div>
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