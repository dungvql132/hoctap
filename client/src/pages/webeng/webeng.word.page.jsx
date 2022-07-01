import { WordsSumaryList } from "src/compoments/words/WordsSumary";
import { getWords } from "src/API/words.API";
import { useEffect } from "react";
import { useState } from "react";

export function WebEng_WordPage() {
    const [wordsLst,setWordsLst] = useState([])
    useEffect(()=>{
        getWords({group:"word"}).then((rs)=>{
            setWordsLst(rs.data.data)
        })
    },[])
    return (
        <>
            WebEng WORD PAGE
            <WordsSumaryList wordsLst={wordsLst}></WordsSumaryList>
        </>
    )
}

export default WebEng_WordPage;