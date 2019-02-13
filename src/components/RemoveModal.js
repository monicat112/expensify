import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app') // aria help

const RemoveModal = (props) => (
    <Modal 
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleModalToggle}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className="modal"
        style={{
            overlay: {
              backgroundColor: 'rgba(51,51,51,0.8)'
            }
        }}
    >
        <h3 className="modal__title">Are you sure you want to remove <i>{props.expenseName}</i>?</h3>
        <div className="button-group">
            <button className="button button--secondary" onClick={props.handleModalToggle}>Cancel</button>
            <button className="button" onClick={props.onRemove}>Remove</button>
        </div>
    </Modal>
)

export default RemoveModal