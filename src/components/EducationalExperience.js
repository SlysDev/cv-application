import { useState } from "react";
import "../styles/ApplicationSections.css";

const EducationalExperience = ({ editing }) => {
    const [schoolName, setSchoolName] = useState("");
    const [major, setMajor] = useState("");
    const [graduationYear, setGraduationYear] = useState(undefined);
    if (editing) {
        return (
            <div className="form-section-container">
                <h2>Educational Experience</h2>
                <div className="section-information">
                    <div className="form-item">
                        <p>Name of School:</p>
                        <input
                            value={schoolName}
                            onChange={(e) => {
                                setSchoolName(e.target.value);
                            }}
                            type="text"
                            name="schoolName"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Major:</p>
                        <input
                            value={major}
                            onChange={(e) => {
                                setMajor(e.target.value);
                            }}
                            type="text"
                            name="major"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Graduation Year:</p>

                        <input
                            value={graduationYear}
                            onChange={(e) => {
                                setGraduationYear(e.target.value);
                            }}
                            type="number"
                            name="graduationYear"
                            id=""
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="form-section-container">
                <h2>Educational Experience</h2>
                <div className="section-information">
                    <div className="form-item">
                        <p>Name of School:</p>
                        <p>{schoolName}</p>
                    </div>
                    <div className="form-item">
                        <p>Major:</p>
                        <p>{major}</p>
                    </div>
                    <div className="form-item">
                        <p>Graduation Year:</p>
                        <p>{graduationYear}</p>
                    </div>
                </div>
            </div>
        );
    }
};
export default EducationalExperience;
