import LoginPage from "../pages/authentication/login.page";
import RegisterPage from "../pages/authentication/register.page";
import MainLayout from "../pages/layout/DefaultLayout";
import MainHomePage from "../pages/main.home.page";
import WebEng_HomePage from "src/pages/webeng/webeng.home.page";
import WebEng_WordPage from "src/pages/webeng/webeng.word.page";
import WebEng_WordDetailPage from "src/pages/webeng/webeng.worddetail.page";
import { webEng } from "src/constants/menuList"
import AuthenLayout from "src/pages/layout/AuthenLayout";

function Routes({ path, header = false, Layout = MainLayout, items = null,defaultSelect=null, Compoment = null }) {
    return {
        path,
        header,
        Layout,
        items,
        defaultSelect,
        Compoment
    }
}

export const pathRoutes = [
    Routes({
        path: "/login",
        Compoment: LoginPage,
        Layout : AuthenLayout
    }),
    Routes({
        path: "/register",
        Compoment: RegisterPage,
        Layout : AuthenLayout
    }),
    Routes({
        path: "/",
        Compoment: MainHomePage
    }),
    Routes({
        path: "/webeng",
        Compoment: WebEng_HomePage,
        items: webEng
    }),
    Routes({
        path: "/webeng/words",
        Compoment: WebEng_WordPage,
        items: webEng,
        defaultSelect : "words"
    }),
    Routes({
        path: "/webeng/words/:word",
        Compoment: WebEng_WordDetailPage,
        items: webEng,
        defaultSelect : "words"
    }),
]

export function toRoute({ Layout, items,defaultSelect, Compoment }) {
    return (
        <Layout items={items} defaultSelect={defaultSelect}>
            <Compoment></Compoment>
        </Layout>
    )
}

// export default {
//     pathRoutes,
//     toRoute
// }