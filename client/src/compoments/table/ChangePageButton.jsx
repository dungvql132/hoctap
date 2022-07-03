import styled from "styled-components"

const PageButton = styled.div`
    height: 2rem;
    width: 2rem;
    margin: 0 0.2rem;
    background-color: ${props => props.theme.colors.bg.body} ;
    .default-button{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        border: 0;
    }
    :hover{
        border:1px solid ${props => props.theme.colors.primary}
    }

    .selected-button{  
        display: flex; 
        color: white;
        background-color: ${props => props.theme.colors.primary};
    }
    .selected-button:hover{   
        border:1px solid white
    }
`

const ChangePageButton = ({ datas:{number, isSelect}, actions:{setSelectPage} }) => {
    return (
        <PageButton>
            <button
                className={`default-button ${isSelect ? "selected-button" : ""}`}
                onClick={()=>{
                    setSelectPage(number)
                }}
            >
                {number}
            </button>
        </PageButton>
    )
}

export default ChangePageButton;