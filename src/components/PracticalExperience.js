import { useState } from "react";
import "../styles/ApplicationSections.css";

const PracticalExperience = ({ editing }) => {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [dateOfHire, setDateOfHire] = useState(new Date());
    const [dateOfDeparture, setDateOfDeparture] = useState(new Date());

    if (editing) {
        return (
            <div className="form-section-container">
                <h2>Practical Experience</h2>
                <div className="section-information">
                    <div className="form-item">
                        <p>Company Name:</p>
                        <input
                            value={companyName}
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                            }}
                            type="text"
                            name="companyName"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Position Title:</p>
                        <input
                            value={positionTitle}
                            onChange={(e) => {
                                setPositionTitle(e.target.value);
                            }}
                            type="text"
                            name="positionTitle"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Job Description:</p>
                        <input
                            value={jobDescription}
                            onChange={(e) => {
                                setJobDescription(e.target.value);
                            }}
                            type="text"
                            name="jobDescription"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Date of Hire:</p>
                        <input
                            onChange={(e) => {
                                let capturedDate = new Date(e.target.value);
                                setDateOfHire(capturedDate);
                            }}
                            type="date"
                            name="dateOfHire"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Date of Departure:</p>
                        <input
                            onChange={(e) => {
                                setDateOfDeparture(new Date(e.target.value));
                            }}
                            type="date"
                            name="dateOfDeparture"
                            id=""
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="form-section-container">
                <h2>Practical Experience</h2>
                <div className="section-information">
                    <div className="form-item">
                        <p>Company Name:</p>
                        <p>{companyName}</p>
                    </div>
                    <div className="form-item">
                        <p>Position Title:</p>
                        <p>{positionTitle}</p>
                    </div>
                    <div className="form-item">
                        <p>Job Description:</p>
                        <p>{jobDescription}</p>
                    </div>
                    <div className="form-item">
                        <p>Date of Hire:</p>
                        <p>{dateOfHire.toLocaleDateString()}</p>
                    </div>
                    <div className="form-item">
                        <p>Date of Departure:</p>
                        <p>{dateOfDeparture.toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default PracticalExperience;
