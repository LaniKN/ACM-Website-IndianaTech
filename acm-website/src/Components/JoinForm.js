import { useState } from 'react';
import '../pages/BecomeMember.css';

export function JoinForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [prefName, setPrefName] = useState("")
    const [email, setemail] = useState("");
    const [setYear] = useState("");
    const [major, setMajor] = useState("");
    const [setGender] = useState("");

    return (
        <div>
            <form className = 'MemberForm'>
                <div className="question">
                    <label>
                        First Name:
                        <input type="text" className="txtResponse" placeholder="Jane" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label>
                        Last Name:
                        <input type="text" className="txtResponse" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label>
                        Preferred Name(opt.) :
                        <input type="text" className="txtResponse" placeholder="John" value={prefName} onChange={(e) => setPrefName(e.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label>
                        Indiana Tech Email Address:
                        <input type="text" className="txtResponse" placeholder="myEmail01@indianatech.net" value={email} onChange={(e) => setemail(e.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label>
                        Year in School, or equivalent:
                        <select required>
                            <option className="choice" value="Freshman (1st year)" onSelect={(e) => setYear(e.target.value)}>Freshman (1st Year)</option>
                            <option className="choice" value="Sophomore (2nd year)" onSelect={(e) => setYear(e.target.value)}>Sophomore (2nd Year)</option>
                            <option className="choice" value="Junior (3rd year)" onSelect={(e) => setYear(e.target.value)}>Junior (3rd Year)</option>
                            <option className="choice" value="Senior (4th year)" onSelect={(e) => setYear(e.target.value)}>Senior (4th Year)</option>
                        </select>
                    </label>
                </div>
                <div className="question">
                    <label>
                        Major:
                        <input type="text" className="txtResponse" value={major} onChange={(e) => setMajor(e.target.value)} required
                        />
                    </label>
                </div>
                <div className="question">
                    <label>
                        Gender:
                        <select required>
                            <option className="choice" value="Male" onSelect={(e) => setGender(e.target.value)}>Male</option>
                            <option className="choice" value="Female" onSelect={(e) => setGender(e.target.value)}>Female</option>
                            <option className="choice" value="Non-binary or Gender Diverse" onSelect={(e) => setGender(e.target.value)}>Non-binary or Gender Diverse</option>
                            <option className="choice" value="Prefer not to say" onSelect = {(e) => setGender(e.target.value)}>Prefer Not to Say</option>
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