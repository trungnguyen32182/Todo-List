'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormGroup, TextField, InputLabel, Input } from '@mui/material';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList, editTodoList } from '../redux/actions'
import { nanoid } from "nanoid";
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

function AppModal(props) {
    const { show, setShow, typeModal, setTypeModal, userID, setUserId, content, setContent, pos, setPos } = props;
    const [userIDs, setUserIDs] = useState('');
    const [contents, setContents] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('')
    const { todo } = useSelector((store) => store)
    const dispatch = useDispatch();

    const handleClose = () => {
        setShow(false)
        setUserIDs('')
        setContents('')
    }

    const handleModal = () => {
        if (typeModal === 0) {
            setText("Create");
            setTitle("Add New Todo");
            var data = {
                id: nanoid(),
                todo: contents,
                completed: false,
                userId: userIDs,
            };
            dispatch(addTodoList(data));
        } else if(typeModal === 1) {
            setText("Save");
            setTitle("Update Todo");

            var data = {
                pos: pos,
                todo: contents,
                userId: userIDs,
            };

            
            dispatch(editTodoList(data));

            setUserIDs('')
            setContents('')
        }
    };


    useEffect(() => {
        if (typeModal === 1) {
            setUserIDs(userID);
            setContents(content);
        }
    }, [typeModal, userID, content]);

    return (
        <div>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" style={{ marginBottom: 10 + "px" }} variant="h6" component="h2">
                            {title}
                        </Typography>
                        <FormGroup style={{ marginBottom: 20 + "px" }}>
                            <FormControl>
                                <InputLabel htmlFor="userId">User ID</InputLabel>
                                <Input id="userId" value={userIDs} onChange={(e) => setUserIDs(e.target.value)}></Input>
                            </FormControl>
                        </FormGroup>
                        <FormControl style={{
                            marginBottom: 20 + "px",
                            width: 100 + '%'
                        }}>
                            <InputLabel htmlFor="contents">Todo</InputLabel>
                            <Input multiline
                                rows={5}
                                fullwidth={true}
                                value={contents} onChange={(e) => setContents(e.target.value)}
                            ></Input>
                        </FormControl>
                        <Box style={{ float: 'right' }}>
                            <Button onClick={handleClose}>Close</Button>
                            <Button onClick={() => handleModal()}>{text}</Button>
                        </Box>
                    </Box>
                </div>
            </Modal>
        </div>
    );
}

export default AppModal