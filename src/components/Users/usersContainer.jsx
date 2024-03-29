import React from 'react';
import { connect } from 'react-redux';
import { follow , unfollow, setCurrentPage , setTotalUsersCount, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/usersReducer';
import Users from './users';
import Preloader from '../Preloader/preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)  
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize) 
    }

    render() {
        return (
            <>
                { this.props.isFetching && <Preloader /> }
                <Users 
                    onPageChanged={this.onPageChanged} 
                    totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
})(UsersContainer);
