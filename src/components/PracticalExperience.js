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
                        <input
                            onChange={(value) => {
                                this.setState({
                                    dateOfHire: new Date(value),
                                });
                            }}
                            type="date"
                            name="dateOfHire"
                            id=""
                        />
                        <input
                            onChange={(value) => {
                                this.setState({
                                    dateOfDeparture: new Date(value),
                                });
                            }}
                            type="date"
                            name="dateOfDeparture"
                            id=""
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="form-section-container">
                    <h2>Practical Experience</h2>
                    <div className="section-information">
                        <p>{this.state.companyName}</p>
                        <p>{this.state.positionTitle}</p>
                        <p>{this.state.jobDescription}</p>
                        <p>{this.state.dateOfHire.toLocaleDateString()}</p>
                        <p>{this.state.dateOfDeparture.toLocaleDateString()}</p>
                    </div>
                </div>
            );
        }
    }
}
