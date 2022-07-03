import { WordsSumary, WordsSumaryList } from "src/compoments/words/WordsSumary";
import { getWords } from "src/API/words.API";
import { useEffect, useState } from "react";
import TableContainer1 from "src/compoments/table/TableContainer1";

let count = 0;
export function WebEng_WordPage() {
    const [wordsLst, setWordsLst] = useState([])
    const [selectPage, setSelectPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    useEffect(() => {
        getWords({ group: "word", page: selectPage,pagesize:3 }).then((rs) => {
            setTotalPage(rs.data.totalPage)
            setWordsLst(rs.data.data)
            console.log(" all data: ",rs.data);
        })
    }, [selectPage])
    return (
        <>
            {/* <WordsSumaryList datas={{wordsLst}}></WordsSumaryList> */}
            <TableContainer1
                datas={{ totalPage: totalPage, selectPage: selectPage, columnNumber: 4 }}
                Render={WordsSumary}
                items={wordsLst}
                actions={{ setSelectPage }}
            >
            </TableContainer1>
        </>
    )
}

export default WebEng_WordPage;