import { Modal, Button } from 'antd';
import storeActions from 'src/store/actions'
import { connect } from 'react-redux'

const ModalContainer = ({
    children,
    storeDatas: { isModalVisible },
    storeActions: { setModalVisible },
    datas: { title }
}) => {

    const showModal = () => {
        setModalVisible(true);
    };

    const handleOk = () => setModalVisible(false);

    const handleCancel = () => setModalVisible(false);

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {title ? title : "Open modal"}
            </Button>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
            >
                {children}
            </Modal>
        </>
    );
};

const mapStatetoProps = (state) => {
    return {
        storeDatas: {
            isModalVisible: state['isModalVisible']
        }
    }
}

const mapDispathtoProps = (dispath) => {
    return {
        storeActions: {
            setModalVisible: (isModalVisible) => {
                dispath({
                    type: storeActions.SET_MODAL_VISIBLE,
                    payload: isModalVisible
                })
            }
        }
    }
}

export default connect(mapStatetoProps, mapDispathtoProps)(ModalContainer);