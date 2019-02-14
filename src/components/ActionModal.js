import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app') // aria help

const ActionModal = (props) => (
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
        <h3 className="modal__title">{props.modalTitle}</h3>
        <div className="button-group">
            <button className="button button--secondary" onClick={props.handleModalToggle}>Cancel</button>
            <button className="button" onClick={props.handleAction}>{props.actionButtonTitle}</button>
        </div>
    </Modal>
)

export default ActionModal