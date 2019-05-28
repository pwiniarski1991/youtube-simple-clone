import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }
    termChangeID = null
    handleChange = ({ target: { value } }) => {
        this.setState({ term: value });
        this.termChangeID = setTimeout(() => this.props.onVideoSearch(value),300)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input className="search" type="text" value={this.state.term} onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
    componentWillUnmount() {
        clearTimeout(this.termChangeID);
    }
}

export default SearchBar;