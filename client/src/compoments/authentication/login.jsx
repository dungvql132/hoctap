import { Form, Input, Button, message } from 'antd'
import { loginAPI } from 'src/API/authentication'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import storeActions from 'src/store/actions'
import { connect } from 'react-redux'
import React from 'react';

const Div = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-form.ant-form-vertical{
        width: 100%;
    }
`

const WelcomeDiv = styled.div`
    font-size: 18px;
    margin-bottom: 2%;
`

const IntroduceDiv = styled.div`
    font-size: 14px;
    margin-bottom: 5%;
`

const ErrorDiv = styled.div`
    font-size: 14px;
    margin-bottom: 5%;
    color: red;
`

const RowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    align-items: center;
`

export function LoginForm({ storeDatas: { user, isLogin }, storeActions: { userLogin } }) {
    const history = useHistory();
    const [form] = Form.useForm();
    const [errorMessge, setErrorMessge] = React.useState('');
    return (
        <Div>
            <WelcomeDiv>Welcome to Dung Website!!</WelcomeDiv>
            <IntroduceDiv>Please sign-in to your account. </IntroduceDiv>
            <Form
                layout={'vertical'}
                form={form}
                initialValues={{
                    layout: 'vertical',
                }}
                onFinish={() => {
                    // console.log("finished ", form.getFieldsValue());
                    loginAPI(form.getFieldsValue()).then((rs) => { 
                        userLogin({
                            email: form.getFieldValue('email'),
                            accesstoken: rs.data.accesstoken
                        })
                        setErrorMessge('')
                        history.push("/")
                    }).catch((error) => {
                        message.error(error.response.data.message, 3)
                        setErrorMessge(error.response.data.message)
                    })
                }}
            >
                <Form.Item label="Email" name={"email"}>
                    <Input placeholder="input email" />
                </Form.Item>
                <Form.Item label="Password" name={"password"}>
                    <Input.Password placeholder="input password" />
                </Form.Item>
                <ErrorDiv style={{ display: (errorMessge == '') ? "none" : "flex" }}>{errorMessge}</ErrorDiv>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
            <RowDiv>
                <a onClick={() => {
                    history.push({ pathname: '/register' })
                }}>create new account</a>

                <a onClick={() => {
                    history.push({ pathname: '/register' })
                }}>forgot password</a>
            </RowDiv>
            <hr style={{ width: "100%" }} />
            <RowDiv>
            </RowDiv>
        </Div>
    );
}

// export default LoginForm;

const mapStatetoProps = (state) => {
    return {
        storeDatas: {
            user: state['user'],
            isLogin: state['isLogin']
        }
    }
}

const mapDispathtoProps = (dispath) => {
    return {
        storeActions: {
            userLogin: ({ email, accesstoken }) => {
                dispath({
                    type: storeActions.USER_LOGIN,
                    payload: { email, accesstoken }
                })
            }
        }
    }
}

export default connect(mapStatetoProps, mapDispathtoProps)(LoginForm);