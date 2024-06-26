import React from "react";
import './modal.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SampleModal = ({ active, onModalClose, children }) => {
  return (
    <Modal
    open={active}
    onClose={onModalClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
  <Box sx={style}>
  {children}
  </Box>
  </Modal>
  );
};

export default SampleModal;