import styled from "styled-components";
import { useHistory,useLocation } from 'react-router-dom'

function lastElementArray(array) {
  return array[array.length - 1]
}

const Div = styled.div`
    display: flex;
    flex-direction : row;
    width: 100%;
    background-color: ${props => props.theme.colors.bg.body};
    height: 2rem;
    margin-bottom: 1rem;
`

const LinkElement = styled.a`
    margin: 0 1em;
`

export const DetailLink = () => {
  const history = useHistory()
  const location = useLocation()

  const path = location.pathname
  
  let details = [{ "link": "/", "value": "Home" }]
  if (path != null) {
    path.split("/").forEach((value) => {
      if (value !== '') {
        details.push({
          "link": lastElementArray(details).link + value + "/",
          value
        })
      }
    });
  }
  return (
    <Div>
      {details.map((element, index) => {
        return (
          <div key={index + ''}>
            <LinkElement
              onClick={() => { history.push(element.link) }}
            >
              {element.value}
            </LinkElement>
            {(index == details.length - 1) ? "" : " > "}
          </div>
        )
      })}
    </Div>
  )
}

export default DetailLink;