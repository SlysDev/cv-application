import { useState } from "react";
import "../styles/ApplicationSections.css";

const GeneralInformation = ({ editing }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    if (editing) {
        return (
            <div className="form-section-container">
                <h2>General Information</h2>
                <div className="section-information">
                    <div className="form-item">
                        <p>Name:</p>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            type="text"
                            name="name"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Email:</p>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            name="email"
                            id=""
                        />
                    </div>
                    <div className="form-item">
                        <p>Phone #:</p>
                        <input
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
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
                        <p>{name}</p>
                    </div>
                    <div className="form-item">
                        <p>Email:</p>
                        <p>{email}</p>
                    </div>
                    <div className="form-item">
                        <p>Phone #:</p>
                        <p>{phoneNumber}</p>
                    </div>
                </div>
            </div>
        );
    }
};
export default GeneralInformation;
