import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const WriteButtonBlock = styled.div``;

const WriteButton = () => {
    return (
        <WriteButtonBlock>
            <Button to="/write">/write이동</Button>
        </WriteButtonBlock>
    );
};

export default WriteButton;