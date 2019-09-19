import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 380px;

    @media screen and (max-width: 800px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const SignInTitleContainer = styled.h2`
    margin: 10px 0;
`;

export const SignInButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        button {
            max-width: 50%;
            min-width: 50%;
        }
    }
`;