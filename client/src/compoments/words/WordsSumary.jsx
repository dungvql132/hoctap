import TitleButton from "src/compoments/button/TitleButton"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const WordsSumaryDiv = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
`

export const WordsSumary = ({word,createat,lastupdated})=>{
    const history = useHistory();
    return (
        <WordsSumaryDiv>
            <TitleButton onClick={()=>{
                history.push(`/webeng/words/${word}`)
            }}>{word.toUpperCase()}</TitleButton>
            <hr style={{ width: "100%" }} />
            <div>create at: {createat}</div>
            <div>lastupdated at: {lastupdated}</div>
        </WordsSumaryDiv>
    )
}

export const WordsSumaryList = ({wordsLst})=>{
    return (
        <>
            {wordsLst.map((value,index)=>{
                return <WordsSumary word={value.word} createat={value.createat} lastupdated={value.lastupdated} key={index+""}></WordsSumary>
            })}
        </>
    )
}