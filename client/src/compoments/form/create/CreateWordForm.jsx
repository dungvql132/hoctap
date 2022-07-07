import { Form, Button, Input, Select, message } from "antd";
import styled from "styled-components";
import { ErrorDiv, Hr } from "src/compoments/styled";
import { useState } from "react";
import { useEffect } from "react";
import { createWord } from "src/API/words.API";
const { Option } = Select;
const Div = styled.div`
    
`

const CreateWordForm = ({

}) => {
    const [form] = Form.useForm();
    const [errorMessge, setErrorMessge] = useState('');
    return (
        <Div>
            <Form
                layout={'vertical'}
                form={form}
                initialValues={{
                    layout: 'vertical',
                    type: "noun",
                    status: "private"
                }}
                onFinish={() => {
                    console.log("finished ", form.getFieldsValue());
                    createWord(form.getFieldsValue()).then((rs) => {
                        console.log("call rs: ", rs);
                        setErrorMessge('')
                        message.success(rs.data.message)
                    }).catch((error) => {
                        message.error(error.response.data.message, 3)
                        setErrorMessge(error.response.data.message)
                    })
                }}
            >
                <Form.Item label="Word" name={"word"}>
                    <Input placeholder="input word" />
                </Form.Item>
                <Form.Item label="English mean" name={"englishmean"}>
                    <Input.TextArea
                        placeholder="input english mean"
                        autoSize={{ minRows: 1, maxRows: 7 }}
                    />
                </Form.Item>
                <Form.Item label="VietNam mean" name={"vietnammean"}>
                    <Input placeholder="input vietnammean" />
                </Form.Item>
                <Form.Item label="Type" name={"type"}>
                    <Select>
                        {['noun', 'verb', 'adjective', 'adverb'].map((value, index) => {
                            return <Option value={value} key={index + ''}>{value}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name={"status"}>
                    <Select>
                        <Option value="private">private</Option>
                        <Option value="public">public</Option>
                    </Select>
                </Form.Item>
                <ErrorDiv style={{ display: (errorMessge == '') ? "none" : "flex" }}>{errorMessge}</ErrorDiv>
                <Hr></Hr>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Div>
    )
}

export default CreateWordForm;