import { WordsDetailList } from "src/compoments/words/WordsDetail";
import { getWords } from "src/API/words.API";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function WebEng_WordDetailPage() {
    const { word } = useParams();
    const [wordsLst,setWordsLst] = useState([])
    useEffect(()=>{
        getWords({word}).then((rs)=>{
            setWordsLst(rs.data.data)
        })
    },[])
    return (
        <>
            <WordsDetailList wordsLst={wordsLst}></WordsDetailList>
        </>
    )
}

export default WebEng_WordDetailPage;