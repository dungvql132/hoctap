import { WordsDetailList } from "src/compoments/words/WordsDetail";
import { getWords } from "src/API/words.API";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ModalContainer from "src/compoments/modal/ModalContainer";


export function WebEng_WordDetailPage() {
    const { word } = useParams();
    const [wordsLst, setWordsLst] = useState([])
    useEffect(() => {
        getWords({ word,sentences:true }).then((rs) => {
            console.log("details data: ", rs.data.data);
            setWordsLst(rs.data.data)
        })
    }, [])
    return (
        <div>
            <WordsDetailList datas={{ wordsLst }}></WordsDetailList>
        </div>
    )
}

export default WebEng_WordDetailPage;