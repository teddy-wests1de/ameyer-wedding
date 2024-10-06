export function RSVP() {

    return(
        <div className="rsvp">
            <div className="title"><h2>RSVP</h2></div>
            <hr></hr>
            <div>
                <p>Please RSVP by January 2025</p>
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
                    <div className="form-row">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                    <div className="form-field">
                            <label for="yes"><input type="radio" />Yes</label>
                            <label for="no"><input type="radio" />No</label>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}