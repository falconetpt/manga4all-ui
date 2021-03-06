import React, {Component} from "react";
import SearchBar from "material-ui-search-bar";
import {withRouter} from "react-router-dom";


class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }


    render() {

        const search = () => {
            this.props.history.push(`/search/${this.state.value}`);
            this.setState({ value: "" })
        };

        return <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({ value: newValue })}
            onCancelSearch={() => this.setState({ value: "" })}
            onRequestSearch={() => search(this.state.value)}
        />
    }
}

export default withRouter(SearchComponent)