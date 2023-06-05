import { Component } from "react";

export default class PracticalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            companyName: "",
            positionTitle: "",
            jobDescription: "",
            dateOfHire: new Date(),
            dateOfDeparture: new Date(),
        };
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>General Information</h1>
                    <input type="text" name="name" id="" />
                    <input type="email" name="email" id="" />
                    <input type="number" name="phone-number" id="" />
                </div>
            );
        } else {
            return (
                <div>
                    <h1>General Information</h1>
                    <p>{this.state.name}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.phoneNumber.toString()}</p>
                </div>
            );
        }
    }
}
