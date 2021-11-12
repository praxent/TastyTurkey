import * as React from 'react'
import Modal from '@mui/material/Modal'

type Props = {
  open: boolean
  handleClose: () => void
  children: any
}

const FormModal: React.FC<Props> = ({ open, handleClose, children }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ backgroundColor: 'white', width: '40%', height: '70%' }}>{children}</div>
      </Modal>
    </div>
  )
}

export default FormModal
