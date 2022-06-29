import { Route } from "react-router-dom";
import LoginPage from "../pages/authentication/login.page";
import RegisterPage from "../pages/authentication/register.page";
import MainLayout from "../pages/layout/DefaultLayout";
import MainHomePage from "../pages/main.home.page";
import WebEngHomePage from "src/pages/webeng/webeng.home.page";

function Routes({ path, header = false, Layout = MainLayout, Compoment = null }) {
    return {
        path,
        header,
        Layout,
        Compoment
    }
}

export const pathRoutes = [
    Routes({
        path: "/login",
        Compoment: LoginPage
    }),
    Routes({
        path: "/register",
        Compoment: RegisterPage
    }),
    Routes({
        path: "/",
        Compoment: MainHomePage
    }),
    Routes({
        path: "/webeng",
        Compoment: WebEngHomePage
    }),
]

export function toRoute({ Layout, Compoment }) {
    return (
        <Layout>
            <Compoment></Compoment>
        </Layout>
    )
}

// export default {
//     pathRoutes,
//     toRoute
// }