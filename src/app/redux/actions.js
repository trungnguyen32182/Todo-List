'use client'
import { ACTION_ADD, ACTION_EDIT, ACTION_DELETE, ACTION_COMPLETE } from './actionType'

export const addTodoList = (data) => {
    return {
        type: ACTION_ADD,
        payload: data
    }
}

export const editTodoList = (data) => {
    return {
        type: ACTION_EDIT,
        payload: data
    }
}

export const deleteTodoList = (data) => {
    return {
        type: ACTION_DELETE,
        payload: data
    }
}

export const completeTodoList = (data) => {
    return {
        type: ACTION_COMPLETE,
        payload: data
    }
}






