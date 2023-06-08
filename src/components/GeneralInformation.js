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
                        <input type="text" name="name" id="" />
                        <input type="email" name="email" id="" />
                        <input type="number" name="phone-number" id="" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="form-section-container">
                    <h2>General Information</h2>
                    <div className="section-information">
                        <p>{this.state.name}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.phoneNumber}</p>
                    </div>
                </div>
            );
        }
    }
}
