/**
 * Created by Sourabh Punja on 1/8/2018.
 */
import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: ''};
    }


    render() {
        // return <input onChange={this.onInputChange}/>;
        // return <input onChange={event => console.log(event.target.value)}/>;
        return (
            <div className="search-bar">
            <input
                value = {this.state.term}
                // onChange={event => this.setState({term: event.target.value })}/>;
                onChange={event => this.onInputChange(event.target.value)}/>;
                {/*Value of the input: {this.state.term}*/}
            </div>
        );
    }

    onInputChange(term){
        // console.log(event.target.value);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
// const SearchBar = () => {
//     return <input/>;
// };

export default SearchBar;