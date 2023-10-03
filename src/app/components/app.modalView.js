'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormGroup } from '@mui/material';
import { useState } from 'react'

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

function AppModalView(props) {
    const { showView, setShowView, userID, setUserID, content, setContent } = props;
    const handleClose = () => {
        setShowView(false)
    }

    return (
        <div>
            <Modal
                open={showView}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" style={{ marginBottom: 10 + "px" }} variant="h6" component="h2">
                            View Todo
                        </Typography>
                        <Typography id="modal-modal-title" style={{ marginBottom: 10 + "px" }} variant="h6" component="h2">
                            User ID
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {userID}
                        </Typography>

                        <Typography id="modal-modal-title" style={{ marginBottom: 10 + "px" }} variant="h6" component="h2">
                            Todo    
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {content}
                        </Typography>

                        <Box style={{ float: 'right' }}>
                            <Button onClick={handleClose}>Close</Button>
                        </Box>
                    </Box>
                </div>
            </Modal>
        </div>
    );
}

export default AppModalView