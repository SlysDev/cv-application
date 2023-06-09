import { Component } from "react";
import "../styles/ApplicationSections.css";

export default class PracticalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            positionTitle: "",
            jobDescription: "",
            dateOfHire: new Date(),
            dateOfDeparture: new Date(),
        };
    }

    render() {
        const { isEditing } = this.props;
        if (isEditing) {
            return (
                <div className="form-section-container">
                    <h2>Practical Experience</h2>
                    <div className="section-information">
                        <div className="form-item">
                            <p>Company Name:</p>
                            <input
                                value={this.state.companyName}
                                onChange={(e) => {
                                    this.setState({
                                        companyName: e.target.value,
                                    });
                                }}
                                type="text"
                                name="companyName"
                                id=""
                            />
                        </div>
                        <div className="form-item">
                            <p>Position Title:</p>
                            <input
                                value={this.state.positionTitle}
                                onChange={(e) => {
                                    this.setState({
                                        positionTitle: e.target.value,
                                    });
                                }}
                                type="text"
                                name="positionTitle"
                                id=""
                            />
                        </div>
                        <div className="form-item">
                            <p>Job Description:</p>
                            <input
                                value={this.state.jobDescription}
                                onChange={(e) => {
                                    this.setState({
                                        jobDescription: e.target.value,
                                    });
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
                                    this.setState({
                                        dateOfHire: capturedDate,
                                    });
                                    console.log(capturedDate);
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
                                    this.setState({
                                        dateOfDeparture: new Date(
                                            e.target.value
                                        ),
                                    });
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
                            <p>{this.state.companyName}</p>
                        </div>
                        <div className="form-item">
                            <p>Position Title:</p>
                            <p>{this.state.positionTitle}</p>
                        </div>
                        <div className="form-item">
                            <p>Job Description:</p>
                            <p>{this.state.jobDescription}</p>
                        </div>
                        <div className="form-item">
                            <p>Date of Hire:</p>
                            <p>{this.state.dateOfHire.toLocaleDateString()}</p>
                        </div>
                        <div className="form-item">
                            <p>Date of Departure:</p>
                            <p>
                                {this.state.dateOfDeparture.toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
