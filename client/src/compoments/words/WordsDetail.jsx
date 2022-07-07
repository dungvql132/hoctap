import styled from "styled-components"
import { dateStringToString } from "src/untils/datehandle/datehandle"
import { Hr, Title1, Title2 } from "../styled"

const WordsDetailDiv = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
`

export const WordsDetail = ({ datas: { id, word, type, englishmean, vietnammean, createat, lastupdated, sentences } }) => {
    return (
        <WordsDetailDiv>
            <Title2>
                {word}
            </Title2>
            <div>Type: {type}</div>
            <div>- english signification: {englishmean}</div>
            <div>- vietnam signification: {vietnammean}</div>
            <hr style={{ width: "100%" }} />
            <div>create at: {dateStringToString(createat)}</div>
            <div>lastupdated at: {dateStringToString(lastupdated)}</div>
            <Hr />
            <div>Example</div>
            {sentences.map((value, index) => {
                return <div key={index + ""}>{value.Sentence}</div>
            })}
        </WordsDetailDiv>
    )
}

export const WordsDetailList = ({ datas: { wordsLst } }) => {
    return (
        <>
            <Title1>{wordsLst[0] ? wordsLst[0].word.toUpperCase() : "UNKONW WORD"}</Title1>
            <hr style={{ width: "100%" }} />
            {wordsLst.map((value, index) => {
                return (
                    <div key={index + ""}>
                        <WordsDetail
                            datas={value}
                        >
                        </WordsDetail>
                        <hr style={{ width: "100%", marginBottom: "2rem" }} />
                    </div>
                )
            })}
        </>
    )
}

export default WordsDetailList;