import { Footer } from "src/compoments/Footer";
import { Header } from "src/compoments/Header";
import { Row, Col } from 'antd'
import Menu1 from "src/compoments/menu/Menu1";
import Home from "src/compoments/Home";
import DetailLink from "src/compoments/Title/DetailLink";

export function DefaultLayout({ children, datas: { items, defaultSelect } }) {
    return (
        <>
            <Row gutter={[0, 16]}>
                <Col span={4}>
                    <Home></Home>
                    <Menu1 datas={{ items, defaultSelect }} ></Menu1>
                </Col>
                <Col span={18} offset={1}>
                    <Row gutter={[0, 32]}>
                        <Header />
                    </Row>
                    <Row gutter={[0, 32]}>
                        <DetailLink></DetailLink>
                        {children}
                    </Row>
                </Col>
            </Row>
            <Footer></Footer>
        </>
    )
}

export default DefaultLayout;