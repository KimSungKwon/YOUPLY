import React from 'react';
import styled from 'styled-components';
import bg_main from '../../lib/styles/bg_main.png';
import GoogleLoginButton from '../auth/GoogleLoginButton';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    .logo {
        margin-bottom: 7rem;
        margin-top: 1rem;
        font-size: 6rem;
        font-weight: 1000;
        letter-spacing: 2.75px;
        text-decoration: none;
        color: #c4302b;
    }
    
    .login {
        align-self: flex-end;
        margin-top: 15px;
        margin-right: 30px;
    }
    .logged {
        align-self: flex-end;
        width: 190.925px;
        height: 43.2px;
        margin-top: 15px;
        margin-right: 30px;
        font-weight: 540;
    }

`;

const HeaderBlock = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    .login {
        align-self: flex-end;
        margin-top: 15px;
        margin-right: 30px;
    }
    .logged {
        align-self: flex-end;
        width: 190.925px;
        height: 43.2px;
        margin-top: 15px;
        margin-right: 0.5rem;
        font-weight: 540;
    }

    .header-btn {
        margin-top: 14px;
        margin-right: 1rem;
    }
`;

const ButtonBlock = styled.div`
    display: flex;
    margin-top: 2rem;
    width: 30%;
    justify-content: space-between;
`;

const MainViewer = ({ user, logoutHandler }) => {
    
    return (
        <>
        <HeaderBlock>
            {user ? 
                    (
                    <>
                    <div className="logged">
                    {user.username}님 안녕하세요.
                    </div>
                    <Button className="header-btn" onClick={logoutHandler}>로그아웃</Button>
                    </>
                    ) 
                    : 
                    (<div className="login">
                        <GoogleLoginButton />
                    </div>)
            }
        </HeaderBlock>
        <MainBlock>
            <h1 className="logo">YOUPLY</h1>
            <SearchBar />
            <ButtonBlock>
                <Button red to="/posts">모든 재생목록 보기</Button>
                {user && 
                <Button className="upload-btn" red to="/write">재생목록 업로드</Button>
                }
            </ButtonBlock>
        </MainBlock>
        </>
    )
};

export default MainViewer;