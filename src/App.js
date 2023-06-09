import "./styles/App.css";
import { Component, useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

const App = (props) => {
    const [editing, setEditing] = useState(true);
    const displayInformation = () => setEditing(false);
    const editInformation = () => setEditing(true);
    return (
        <div>
            <h1>CV Application</h1>
            <form className="application-form" action="">
                <GeneralInformation editing={editing} />
                <EducationalExperience editing={editing} />
                <PracticalExperience editing={editing} />
            </form>
            <div id="cta-buttons">
                <button id="submit-btn" onClick={displayInformation}>
                    Submit
                </button>
                <button id="edit-btn" onClick={editInformation}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default App;
