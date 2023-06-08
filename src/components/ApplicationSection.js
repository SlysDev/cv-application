import { Component } from "react";

export default class ApplicationSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: true,
        };
    }

    render() {
        const { title, information } = this.props;
        return null;
    }
}
