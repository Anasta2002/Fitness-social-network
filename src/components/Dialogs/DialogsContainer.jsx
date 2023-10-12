import { compose } from 'redux';
import WithAuthRedurect from '../../hoc/WithAuthRedurect';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialogsPage_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispathToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateMessageCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispathToProps),
    WithAuthRedurect
)(Dialogs)