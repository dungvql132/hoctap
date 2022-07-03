import styled from "styled-components"
import { dateStringToString } from "src/untils/datehandle/datehandle"

const WordsDetailDiv = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
`

const Title2 = styled.div`
    display: flex;
    white-space: pre-wrap;
    :first-child{
        font-size: 24px;
        font-weight: 400;
    }
`

const Title1 = styled.div`
    font-size: 32px;
    font-weight: 500;
`

export const WordsDetail = ({ datas: { word, type, englishmean, vietnammean, createat, lastupdated } }) => {
    return (
        <WordsDetailDiv>
            <Title2>
                <div>{word}</div>
            </Title2>
            <div>Type: {type}</div>
            <div>- english signification: {englishmean}</div>
            <div>- vietnam signification: {vietnammean}</div>
            <hr style={{ width: "100%" }} />
            <div>create at: {createat}</div>
            <div>lastupdated at: {lastupdated}</div>
        </WordsDetailDiv>
    )
}

export const WordsDetailList = ({ datas:{wordsLst} }) => {
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