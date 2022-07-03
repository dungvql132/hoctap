import styled from "styled-components"
import ChangePageButton from "./ChangePageButton"

const PageButtonList = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`


const ChangePageButtonList = ({ datas:{totalPage, selectPage}, actions:{setSelectPage} }) => {
    const list = [-2,-1, 0, 1, 2]
    return (
        <PageButtonList>
            {list.map((value, index) => {
                if((selectPage + value) >= 1 && (selectPage + value) <= totalPage ){
                    return (
                        <ChangePageButton
                        datas={{
                            number:(selectPage+value),
                            isSelect:(value === 0 ? true : false)
                        }}
                        actions={{
                            setSelectPage
                        }}
                         key={index + ''} />
                    )
                }
                return null;
            })}
        </PageButtonList>
    )
}

export default ChangePageButtonList;