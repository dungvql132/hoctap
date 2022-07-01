import { Menu } from 'antd';
import { storeActions } from 'src/store/actions';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import styled from 'styled-components';

const MenuDiv = styled.div`
  width: 100%;
  .ant-menu-inline .ant-menu-item::after{
    border-right: 3px solid ${props => props.theme.colors.primary};
  }
  .ant-menu-item-selected{
    background-color: ${props => props.theme.colors.bg.body} !important;
  }
  .ant-menu-item:hover{
    border-top: 1px solid ${props => props.theme.colors.primary} !important;
    border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
  } 
  .ant-menu-title-content{
    color: ${props => props.theme.colors.text.primary};
  }
`

export const Menu1 = ({ items, mode, menuSelect, setMenuSelect, defautSelect }) => {
  useEffect(() => {
    setMenuSelect(defautSelect)
  }, [])
  const history = useHistory();
  return (
    <MenuDiv>
      <Menu
        onClick={(event) => {
          const item = items.find(element => event.key == element.key)
          setMenuSelect(event.key)
          history.push(item['tolink'])
        }}
        selectedKeys={[menuSelect]}
        mode={mode ? mode : "inline"}
        inlineCollapsed={false}
        items={items}
      />
    </MenuDiv>
  );
};

// export default Menu1;

const mapStatetoProps = (state) => {
  return {
    menuSelect: state['menuSelect']
  }
}

const mapDispathtoProps = (dispath) => {
  return {
    setMenuSelect: (key) => {
      dispath({
        type: storeActions.SET_MENU_SELECT,
        payload: key
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispathtoProps)(Menu1);