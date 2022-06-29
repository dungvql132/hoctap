import RegisterForm from "src/compoments/authentication/register";
import AuthenLayout from "src/pages/layout/AuthenLayout"

export function RegisterPage() {
    return (
        <>
            <AuthenLayout>
                <RegisterForm></RegisterForm>
            </AuthenLayout>
        </>
    )
}

export default RegisterPage;