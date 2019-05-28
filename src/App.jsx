import React from 'react'
// import YTSearch from 'youtube-api-search'
import youtube from './youtube'
import PostList from './components/PostList'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'


class App extends React.Component {
    state = {
        videos: [],
        video: null
    }

    onVideoSearch = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items, video: response.data.items[0] });
    }

    onVideoChange = video => {
        this.setState({ video });
    }

    render() {
        const { video, videos } = this.state;

        return (
            <div className="ui container">
                <PostList />
                {/* <SearchBar onVideoSearch={this.onVideoSearch} />
                <VideoDetail video={video} />
                <VideoList onVideoChange={this.onVideoChange} videos={videos} /> */}
            </div>
        )
    }

    componentDidMount() {
        // this.onVideoSearch('surfboards');
    }
}

export default App;
