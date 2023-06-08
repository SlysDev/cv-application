import "./styles/App.css";
import { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
        };
        this.displayInformation = this.displayInformation.bind(this);
        this.editInformation = this.editInformation.bind(this);
    }
    displayInformation() {
        this.setState({
            isEditing: false,
        });
    }
    editInformation() {
        this.setState({
            isEditing: true,
        });
    }
    render() {
        return (
            <div>
                <h1>CV Application</h1>
                <form className="application-form" action="">
                    <GeneralInformation isEditing={this.state.isEditing} />
                    <EducationalExperience isEditing={this.state.isEditing} />
                    <PracticalExperience isEditing={this.state.isEditing} />
                </form>
                <div id="cta-buttons">
                    <button id="submit-btn" onClick={this.displayInformation}>
                        Submit
                    </button>
                    <button id="edit-btn" onClick={this.editInformation}>
                        Edit
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
