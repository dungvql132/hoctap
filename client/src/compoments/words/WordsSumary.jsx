import TitleButton from "src/compoments/button/TitleButton"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { dateStringToString } from "src/untils/datehandle/datehandle"
import { useState } from "react"

const WordsSumaryDiv = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-right: 2rem;
`

export const WordsSumary = ({ datas: { word, createat, lastupdated } }) => {
    const history = useHistory();

    return (
        <WordsSumaryDiv>
            <TitleButton onClick={() => {
                history.push(`/webeng/words/${word}`)
            }}>{word.toUpperCase()}</TitleButton>
            <hr style={{ width: "100%" }} />
            <div>create at: {dateStringToString(createat)}</div>
            <div>lastupdated at: {dateStringToString(lastupdated)}</div>
        </WordsSumaryDiv>
    )
}

export const WordsSumaryList = ({ datas: { wordsLst } }) => {
    const [selectPage,setSelectPage] = useState(1);
    return (
        <>
            {wordsLst.map((value, index) => {
                return (
                    <div key={index + ""}>
                        <WordsSumary datas={value} >
                        </WordsSumary>
                    </div>)

            })}
        </>
    )
}

export default WordsSumaryList;