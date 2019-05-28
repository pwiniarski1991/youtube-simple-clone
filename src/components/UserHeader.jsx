import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        if(!this.props.user) return <div>loading...</div>;
        return (
            <div>{this.props.user.name}</div>
        )
    }
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    // }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.data.find(u => u.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader)
