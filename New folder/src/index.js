
/*
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'


const API_KEY= "AIzaSyBg3ME_rjJTkJUAS2Rd_FDGy3ZyL9kNtI8";


//Create a new component. This component should produce some HTML
// const App = () => {
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     );
// }

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term: term}, (videos) => {
            // console.log(data);
            // this.setState({videos:videos});
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                */
                {/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}
/*
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}
//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));

*/

import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
    <SkiDayCount />,
    document.querySelector('.container')
)