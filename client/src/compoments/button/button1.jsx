import styled from "styled-components";
import {Button as BtnAtd} from 'antd'

const Button = styled(BtnAtd)`
    color: ${props => props.theme.colors.primary};
    :hover{
        color: ${props => props.theme.colors.border};
        border-color: ${props => props.theme.colors.border};
    }
`

export default Button;