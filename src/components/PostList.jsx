import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from './../store/actions'
import UserHeader from './UserHeader'


class PostList extends React.Component {
    
    renderPosts(items) {
        if(!items) return <div>Loading...</div>;
        return items.map(i => (
            <div className="item" key={i.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{i.title}</h2>
                        <p>{i.body}</p>
                    </div>
                    <UserHeader userId={i.userId} />
                </div>
            </div>
        ))
    }
    render() {
        const { posts } = this.props;
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts(posts)}
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.data
    }
}

export default connect(mapStateToProps,{ fetchPostsAndUsers })(PostList);
