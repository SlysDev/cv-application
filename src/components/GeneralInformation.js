import { Component } from "react";
import "../styles/ApplicationSections.css";

export default class GeneralInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNumber: null,
        };
    }
    render() {
        const { isEditing } = this.props;
        if (isEditing) {
            return (
                <div className="form-section-container">
                    <h2>General Information</h2>
                    <div className="section-information">
                        <div className="form-item">
                            <p>Name:</p>
                            <input
                                value={this.state.name}
                                onChange={(e) => {
                                    this.setState({
                                        name: e.target.value,
                                    });
                                }}
                                type="text"
                                name="name"
                                id=""
                            />
                        </div>
                        <div className="form-item">
                            <p>Email:</p>
                            <input
                                value={this.state.email}
                                onChange={(e) => {
                                    this.setState({
                                        email: e.target.value,
                                    });
                                }}
                                type="email"
                                name="email"
                                id=""
                            />
                        </div>
                        <div className="form-item">
                            <p>Phone #:</p>
                            <input
                                value={this.state.phoneNumber}
                                onChange={(e) => {
                                    this.setState({
                                        phoneNumber: e.target.value,
                                    });
                                }}
                                type="number"
                                name="phone-number"
                                id=""
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="form-section-container">
                    <h2>General Information</h2>
                    <div className="section-information">
                        <div className="form-item">
                            <p>Name:</p>
                            <p>{this.state.name}</p>
                        </div>
                        <div className="form-item">
                            <p>Email:</p>
                            <p>{this.state.email}</p>
                        </div>
                        <div className="form-item">
                            <p>Phone #:</p>
                            <p>{this.state.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
