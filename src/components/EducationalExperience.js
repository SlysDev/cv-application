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
                        <div className="form-item">
                            <p>Name of School:</p>
                            <input
                                value={this.state.schoolName}
                                onChange={(e) => {
                                    this.setState({
                                        schoolName: e.target.value,
                                    });
                                }}
                                type="text"
                                name="schoolName"
                                id=""
                            />
                        </div>
                        <div className="form-item">
                            <p>Major:</p>
                            <input
                                value={this.state.major}
                                onChange={(e) => {
                                    this.setState({
                                        major: e.target.value,
                                    });
                                }}
                                type="text"
                                name="major"
                                id=""
                            />
                        </div>
                        <div className="form-item">
                            <p>Graduation Year:</p>

                            <input
                                value={this.state.graduationYear}
                                onChange={(e) => {
                                    this.setState({
                                        graduationYear: e.target.value,
                                    });
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
                            <p>{this.state.schoolName}</p>
                        </div>
                        <div className="form-item">
                            <p>Major:</p>
                            <p>{this.state.major}</p>
                        </div>
                        <div className="form-item">
                            <p>Graduation Year:</p>
                            <p>{this.state.graduationYear}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
