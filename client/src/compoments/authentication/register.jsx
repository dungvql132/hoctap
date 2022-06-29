import { Form, Input, Button, message } from 'antd'
import {registerAPI} from 'src/API/authentication'
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

export function RegisterForm(props) {
    const history = useHistory();
    const [form] = Form.useForm();
    const [errorMessge,setErrorMessge] = React.useState('');
    const {userLogin} = props;
    return (
        <Div>
            <WelcomeDiv>Welcome to Dung Website!!</WelcomeDiv>
            <IntroduceDiv>Create a new account for you now. </IntroduceDiv>
            <Form
                layout={'vertical'}
                form={form}
                initialValues={{
                    layout: 'vertical',
                }}
                onFinish={() => {
                    // console.log("finished ", form.getFieldsValue());
                    registerAPI(form.getFieldsValue()).then((rs)=>{
                        userLogin({
                            email : form.getFieldValue('email'),
                            accesstoken : rs.data.accesstoken
                        })
                        setErrorMessge('')
                        history.push("/")
                    }).catch((error) => {
                        message.error(error.response.data.message,3)
                        setErrorMessge(error.response.data.message)
                    })
                }}
            >
                <Form.Item label="User Name" name={"name"}>
                    <Input placeholder="input user name" />
                </Form.Item>
                <Form.Item label="Email" name={"email"}>
                    <Input placeholder="input email" />
                </Form.Item>
                <Form.Item label="Password" name={"password"}>
                    <Input.Password placeholder="input password" />
                </Form.Item>
                <ErrorDiv style={{display:(errorMessge=='')?"none":"flex"}}>{errorMessge}</ErrorDiv>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
            <RowDiv>
                <div>Already have a account</div>

                <a onClick={() => {
                    history.push({ pathname: '/login' })
                }}>Sign in instead</a>
            </RowDiv>
            <hr style={{ width: "100%" }} />
            <RowDiv>
            </RowDiv>
        </Div>
    );
}

// export default RegisterForm;

const mapStatetoProps = (state) => {
    return {
      user: state['user'],
      isLogin: state['isLogin']
    }
  }
  
  const mapDispathtoProps = (dispath) => {
    return {
      userLogin: ({email,accesstoken}) => {
        dispath({
          type: storeActions.USER_LOGIN,
          payload: {email,accesstoken}
        })
      }
    }
  }
  
  export default connect(mapStatetoProps, mapDispathtoProps)(RegisterForm);