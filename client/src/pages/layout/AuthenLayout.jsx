import {Row,Col} from 'antd'
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100%;
    background-color: wheat;
`

export function AuthenLayout({children}){
    return (
        <>
            <Row gutter={[16,16]}>
                <Col span={16}><Div></Div></Col>
                <Col span={8}>{children}</Col>
            </Row>
        </>
    )
}

export default AuthenLayout;