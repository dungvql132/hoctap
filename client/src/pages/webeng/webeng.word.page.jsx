import { WordsSumary } from "src/compoments/words/WordsSumary";
import { getWords } from "src/API/words.API";
import { useEffect, useState } from "react";
import TableContainer1 from "src/compoments/table/TableContainer1";
import ModalContainer from "src/compoments/modal/ModalContainer";
import CreateWordForm from "src/compoments/form/create/CreateWordForm";

export function WebEng_WordPage() {
    const [wordsLst, setWordsLst] = useState([])
    const [selectPage, setSelectPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    useEffect(() => {
        getWords({ group: "word", page: selectPage, pagesize: 10 }).then((rs) => {
            setTotalPage(rs.data.totalPage)
            setWordsLst(rs.data.data)
        })
    }, [selectPage])
    return (
        <>
            <ModalContainer datas={{ title: "Create new Word" }}> <CreateWordForm></CreateWordForm> </ModalContainer>
            <TableContainer1
                datas={{ totalPage: totalPage, selectPage: selectPage, columnNumber: 2 }}
                Render={WordsSumary}
                items={wordsLst}
                actions={{ setSelectPage }}
            >
            </TableContainer1>
        </>
    )
}

export default WebEng_WordPage;