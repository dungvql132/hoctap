import { Menu } from 'antd';
import {storeActions} from 'src/store/actions';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

export const Menu1 = ({items,mode,menuSelect,setMenuSelect}) => {
    const history = useHistory();
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <Menu
                onClick={(event)=>{
                    const index = Number(event.key)-1
                    const item = items[index]
                    setMenuSelect(event.key)
                    history.push(item['tolink'])
                }}
                defaultSelectedKeys={[menuSelect]}
                mode={mode ? mode:"inline"}
                inlineCollapsed={false}
                items={items}
            />
        </div>
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