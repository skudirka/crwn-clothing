import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 380px;

    @media screen and (max-width: 800px) {
        width: 100%;
        max-width: 100%;

        button {
            max-width: 50%;
            min-width: 50%;
        }
    }
`;

export const SignUpTitleContainer = styled.h2`
    margin: 10px 0;
`;