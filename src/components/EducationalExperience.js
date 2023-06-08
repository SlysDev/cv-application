import { Component } from "react";
import "../styles/ApplicationSections.css";

export default class EducationalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: "",
            major: "",
            graduationYear: undefined,
        };
    }

    render() {
        const { isEditing } = this.props;
        if (isEditing) {
            return (
                <div className="form-section-container">
                    <h2>Educational Experience</h2>
                    <div className="section-information">
                        <input type="text" name="schoolName" id="" />
                        <input type="text" name="major" id="" />
                        <input type="number" name="graduationYear" id="" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="form-section-container">
                    <h2>Educational Experience</h2>
                    <div className="section-information">
                        <p>{this.state.schoolName}</p>
                        <p>{this.state.major}</p>
                        <p>{this.state.graduationYear}</p>
                    </div>
                </div>
            );
        }
    }
}
