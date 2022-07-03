import { Col, Row } from "antd";
import styled from "styled-components";
import ChangePageButtonList from "./ChangePageButtonList";

const TableContainerDiv = styled.div`
    height: auto;
    width: 100%;
    .table-container{
        width: 100%;
    }
    .button-list{
        width: 100%;
        height: 2.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const createColList = (count) => {
    const colList = []
    for (let i = 0; i < count; i++)    colList.push(i);
    return colList;
}

export const TableContainer1 = ({ datas: { totalPage, selectPage, columnNumber }, actions: { setSelectPage }, items, Render }) => {
    if (columnNumber <= 0) columnNumber = 1;
    if (columnNumber > 4) columnNumber = 4;
    const colSpan = (24 / columnNumber) - 1;
    const colList = createColList(columnNumber);
    return (
        <TableContainerDiv>
            <div className="table-container">
                {items.map((item, index) => {
                    if (index % columnNumber === 0) {
                        return (
                            <Row key={index + ''}>
                                {colList.map((colValue, colIndex) => {
                                    return (
                                        <Col span={colSpan} key={colIndex + "col"}>
                                            {(index + colIndex) < items.length ? <Render datas={items[index + colIndex]}></Render> : null}
                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    }
                })}
            </div>
            <div className="button-list">
                <ChangePageButtonList datas={{ selectPage, totalPage }} actions={{ setSelectPage }}></ChangePageButtonList>
            </div>
        </TableContainerDiv>
    )
}

export default TableContainer1;