import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import ViewIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import AppModal from './app.modal';
import { useDispatch } from 'react-redux';
import { deleteTodoList, completeTodoList } from '../redux/actions'
import AppModalView from './app.modalView';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        textAlign: 'center',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'center',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const AppTable = (props) => {
    const [typeModal, setTypeModal] = useState(0)
    const [show, setShow] = useState(false)
    const [showView, setShowView] = useState(false)
    const [userID, setUserID] = useState('')
    const [content, setContent] = useState('')
    const [pos, setPos] = useState(0)
    const dispatch = useDispatch();


    const handleView = (index) => {
        setUserID(props.todos[index].userId)
        setContent(props.todos[index].todo)
        setShowView(true)
    }

    const handleUpdate = (index) => {
        setShow(true);
        setTypeModal(1);
        setUserID(props.todos[index].userId);
        setContent(props.todos[index].todo);
        setPos(index);
    };
    

    const handleSelect = (index) => {
        if (props.todos[index].completed == false)
            props.todos[index].completed = true
        else props.todos[index].completed = false

        var data = {
            index: index,
            select: props.todos[index].completed
        }
        dispatch(completeTodoList(data))
    }



    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Todo</StyledTableCell>
                            <StyledTableCell align="right">Complete</StyledTableCell>
                            <StyledTableCell align="right">User ID</StyledTableCell>
                            <StyledTableCell align="right">Adjust</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.todos.map((prop, index) => (
                            (prop?.todo !== '' && prop?.userId !== '') ? (
                                <StyledTableRow key={prop?.id}>
                                    <StyledTableCell align="right">{prop?.todo}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Checkbox onClick={() => handleSelect(index)} checked={props?.completed}></Checkbox>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{prop?.userId}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button variant="outlined" color="primary" startIcon={<ViewIcon />} onClick={() => handleView(index)}>
                                            VIEW
                                        </Button>
                                        <Button
                                            style={{ margin: '0px 10px' }}
                                            variant="outlined"
                                            color="warning"
                                            startIcon={<EditIcon />}
                                            onClick={() => handleUpdate(index)}
                                        >
                                            EDIT
                                        </Button>
                                        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}
                                            onClick={() => {
                                                dispatch(deleteTodoList(index))
                                            }}>
                                            DELETE
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ) : null
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AppModal
                show={show}
                setShow={setShow}
                typeModal={typeModal}
                setTypeModal={setTypeModal}
                userID={userID}
                setUserID={setUserID}
                content={content}
                setContent={setContent}
                pos={pos}
                setPos={setPos}
            />

            <AppModalView
                showView={showView}
                setShowView={setShowView}
                userID={userID}
                setUserID={setUserID}
                content={content}
                setContent={setContent}
            />
        </>
    );
}

export default AppTable