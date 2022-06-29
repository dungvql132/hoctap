import LoginForm from "src/compoments/authentication/login";
import AuthenLayout from "src/pages/layout/AuthenLayout"

export function LoginPage() {
    return (
        <>
            <AuthenLayout>
                <LoginForm></LoginForm>
            </AuthenLayout>
        </>
    )
}

export default LoginPage;