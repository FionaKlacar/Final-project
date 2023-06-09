import styled from 'styled-components';

export const OuterWrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center
`;

export const InnerWrapper = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (min-width: 1025px) {
        width: 80%;
        max-width: 600px;
    }
`