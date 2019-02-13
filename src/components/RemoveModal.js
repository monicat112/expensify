import React from 'react'
import Modal from 'react-modal'

// componentDidMount() {
    Modal.setAppElement('#app')
//   }

const RemoveModal = (props) => (
    <Modal 
        isOpen={props.modalIsOpen}
        // onRequestClose={props.handleRemoveExpense}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Are You sure you want to delete this expense?</h3>
    </Modal>
)

export default RemoveModal

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// export default connect()(RemoveModal)