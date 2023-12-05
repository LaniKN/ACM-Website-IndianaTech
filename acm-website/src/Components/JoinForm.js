import { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import '../pages/BecomeMember.css';



const JoinForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [prefName, setPrefName] = useState("")
    const [email, setEmail] = useState("");
    const [setYear] = useState("");
    const [major, setMajor] = useState("");
    const [setGender] = useState("");
    // const scriptUrl = "https://script.google.com/macros/s/AKfycbw4OgSGYNRQsM1V3EKRu64yDKhr2aSRfyMSL-RJ-YMs5r9hd_GiFodGibmuo9qXiUI30g/exec"
    const scriptUrl = "https://sheetdb.io/api/v1/rqf1o6d61x43t"
    const formRef = useRef(null)
    const navigate = useNavigate();
    


    const handleSubmit = (e) =>{
        e.preventDefault()
        setFirstName("")
        setLastName("")
        setPrefName("")
        setEmail("")
        setMajor("")
        navigate('/events')

        fetch(scriptUrl, {method: 'POST', mode:'no-cors', body: new FormData(formRef.current)})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            alert("Thank you for your submission!")
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form  className='MemberForm' onSubmit={(e)=>handleSubmit(e)} metohd="POST" ref={formRef} name="member-form">
                <div className="question">
                    <label htmlFor='FirstName'>
                        First Name:
                        <input type="text" className="txtResponse" name="FirstName" placeholder="Jane" value={firstName} onChange={(a) => setFirstName(a.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label htmlFor='LastName'>
                        Last Name:
                        <input type="text" className="txtResponse" name="LastName" placeholder="Doe" value={lastName} onChange={(a) => setLastName(a.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label htmlFor='PrefName'>
                        Preferred Name(opt.) :
                        <input type="text" className="txtResponse" name="PrefName" placeholder="John" value={prefName} onChange={(a) => setPrefName(a.target.value)} 
                        />
                    </label>
                </div>
                <div className="question">
                    <label htmlFor='Email'>
                        Indiana Tech Email Address:
                        <input type="email" className="txtResponse" name="Email" placeholder="myEmail01@indianatech.net" value={email} onChange={(a) => setEmail(a.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label htmlFor='Year'>
                        Year in School, or equivalent:
                        <select name = "Year" required>
                            <option className="choice" value="Freshman (1st year)" onSelect={(a) => setYear(a.target.value)}>Freshman (1st Year)</option>
                            <option className="choice" value="Sophomore (2nd year)" onSelect={(a) => setYear(a.target.value)}>Sophomore (2nd Year)</option>
                            <option className="choice" value="Junior (3rd year)" onSelect={(a) => setYear(a.target.value)}>Junior (3rd Year)</option>
                            <option className="choice" value="Senior (4th year)" onSelect={(a) => setYear(a.target.value)}>Senior (4th Year)</option>
                        </select>
                    </label>
                </div>
                <div className="question">
                    <label htmlFor="Major">
                        Major:
                        <input type="text" className="txtResponse" name="Major" value={major} onChange={(a) => setMajor(a.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label htmlFor="Gender">
                        Gender:
                        <select name="Gender" required>
                            <option className="choice" value="Male" onSelect={(a) => setGender(a.target.value)}>Male</option>
                            <option className="choice" value="Female" onSelect={(a) => setGender(a.target.value)}>Female</option>
                            <option className="choice" value="Non-binary or Gender Diverse" onSelect={(a) => setGender(a.target.value)}>Non-binary or Gender Diverse</option>
                            <option className="choice" value="Prefer not to say" onSelect = {(a) => setGender(a.target.value)}>Prefer Not to Say</option>
                        </select>
                    </label>
                </div>
                <div className="submitContain">
                    <input type="submit" className="submit"/>
                </div>
            </form>
        </div>
    )
}

export default JoinForm
