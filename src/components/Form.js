
import { useState } from "react";
import "./Form.css"



const Form = () => {


    const [email, setEmail]= useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value) 
    }

    const [password,setPassword] =useState("")
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const [city,setCity] = useState("")
    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const[jobType, setJobType]= useState("")
    const handleJobType = (e) => {
        setJobType(e.target.value)
    }

    return(
        <div className="container">
            <h2>Registration Form</h2>

            <form >
                <label htmlFor="email">Email:</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />
                <br />
                <label htmlFor="city">City:</label>
                <br />
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={handleCity}
                />
                <br />
                <label htmlFor="jobtype">Job Type:</label>
                <br />
                <select
                    id="jobtype"
                    name="jobtype"
                    value={jobType}
                    onChange={handleJobType}
                    >
                    <option value="">Select a job type</option>
                    <option value="fulltime">Full Time</option>
                    <option value="parttime">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="volunteer">Volunteer</option>
                </select>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>




            <div>

                <table>
                    <tr>
                        <th>Email</th>
                        <td> {email}</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td> {password}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>Job Type</th>
                        <td>{jobType}</td>
                    </tr>
                </table> 

            </div>
        </div>
    )
}

export default Form;