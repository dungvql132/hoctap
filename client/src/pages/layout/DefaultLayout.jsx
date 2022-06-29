import { Footer } from "src/compoments/footer";
import { Header } from "src/compoments/header";
import { Row, Col } from 'antd'
import {mainMenu} from 'src/constants/menuList'
import Menu1 from "src/compoments/menu/Menu1";

export function DefaultLayout({ children }) {
    return (
        <>
            <Row gutter={[40, 16]} justify="space-around">
                <Col span={4}>
                    <Menu1 items={mainMenu}></Menu1>
                </Col>
                <Col span={19}>
                    <Row gutter={[0, 32]}>
                        <Header />
                    </Row>
                    <Row gutter={[0, 32]}>
                        {children}
                    </Row>
                </Col>
            </Row>
            <Footer></Footer>
        </>
    )
}

export default DefaultLayout