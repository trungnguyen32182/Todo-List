'use client'
import Apptable from '../components/app.table'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AppModal from './app.modal';
import { useState } from 'react'

const TodoList = (props) => {
    const { todos, setTodos } = props
    const [show, setShow] = useState(false)
    const [typeModal, setTypeModal] = useState(0)
    return (
        <>
            <h1 style={{
                padding: 20 + "px",
                textAlign: "center"
            }}>Todo List</h1>
            <Button style={{
                float: "right",
                marginRight: 10 + "px",
                padding: '10px 20px',
                borderRadius: 25 + "px",
                marginBottom: 20 + "px",
                backgroundColor: '#000000',
                color: '#FFFFFF',
            }}
                startIcon={<AddIcon />}
                onClick={() => {
                    setTypeModal(0)
                    setShow(true)
                }}
            >Add New</Button>
            <Apptable todos={todos} />
            <AppModal
                show={show}
                setShow={setShow}
                typeModal={typeModal}
                setTypeModal={setTypeModal}
            />
        </>
    )
}

export default TodoList