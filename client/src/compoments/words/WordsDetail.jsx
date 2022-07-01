import styled from "styled-components"

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
        font-size: 18px;
        font-weight: 400;
    }
`

export const WordsDetail = ({ word, type, englishmean, vietnammean, createat, lastupdated }) => {
    return (
        <WordsDetailDiv>
            <Title2>
                <div>{word}</div>
                <div>{type}</div>
            </Title2>
            <div>{englishmean}</div>
            <div>{vietnammean}</div>
            <hr style={{ width: "100%" }} />
            <div>create at: {createat}</div>
            <div>lastupdated at: {lastupdated}</div>
        </WordsDetailDiv>
    )
}

export const WordsDetailList = ({ wordsLst }) => {
    console.log("words list: ",wordsLst);
    return (
        <>
            <div>{wordsLst[0] ? wordsLst[0].word :"UNKONW WORD"}</div>
            <hr style={{ width: "100%" }} />
            {wordsLst.map((value, index) => {
                return (
                    <>
                        <WordsDetail
                            word={value.word}
                            createat={value.createat}
                            lastupdated={value.lastupdated}
                            type={value.type}
                            englishmean={value.englishmean}
                            vietnammean={value.vietnammean}
                            key={index + ""}>
                        </WordsDetail>
                    </>
                )
            })}
        </>
    )
}