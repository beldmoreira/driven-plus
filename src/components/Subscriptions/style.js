import styled from 'styled-components';

const Typography = styled.p`
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
`;

const Container = styled.button`
height: 180px;
width: 290px;
left: 43px;
top: 91px;
border-radius: 12px;
border: 3px solid #7E7E7E;
background-color: #0E0E13;

svg{
    height: 95,13px
    width: 100%;
}
`
const PriceStyle = styled.div`
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;

`;
export {
    Typography,
    Container,
    PriceStyle
}