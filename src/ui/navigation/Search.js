import React, {Component} from "react";
import SearchBar from "material-ui-search-bar";
import { withRouter } from "react-router-dom";


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }


    render() {

        const search = () => {
            this.props.history.push(`/search/q=${this.state.value}`);
        };

        return <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({ value: newValue })}
            onRequestSearch={() => search(this.state.value)}
        />
    }
}

export default withRouter(Search)