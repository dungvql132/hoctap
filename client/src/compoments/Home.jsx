import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HomeDiv = styled.div`
    font-size: 2rem;
    font-weight: 700;
    background-color: white;
    padding: 10%;
    width: 100%;
    display: flex;s
    #home{
        color: ${props => props.theme.colors.primary};
    :hover{
        color: ${props => props.theme.colors.primary};
    }
    }
`

export function Home({ size }) {
    const history = useHistory();
    return (
        <HomeDiv onClick={() => { history.push("/") }}>
            <a id="home" onClick={() => { history.push("/") }}>HOME</a>
        </HomeDiv>
    )
}

export default Home;