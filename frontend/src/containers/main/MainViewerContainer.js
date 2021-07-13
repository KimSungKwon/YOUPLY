import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainViewer from '../../components/main/MainViewer';
import { changeField } from '../../modules/user';

const MainViewerContainer = () => {
    const dispatch = useDispatch();
    const { user } = useSelector( ({ user }) => ({
        user: user.user
    }));

    const logoutHandler = () => {
        dispatch(changeField({ key: 'user', value: null }));
    }
    
    
    return <MainViewer user={user} logoutHandler={logoutHandler} />
}

export default MainViewerContainer;