'use client'
import { ACTION_ADD, ACTION_EDIT, ACTION_DELETE, ACTION_COMPLETE } from './actionType'

const initState = {
    todo: JSON.parse(localStorage.getItem('DataTodo'))
}

function reducer(state = initState, { type, payload }) {
    switch (type) {
        case ACTION_ADD: {

            const data = [...state.todo, payload]
            localStorage.setItem('DataTodo', JSON.stringify(data))

            return ({
                todo: data
            })
        }

        case ACTION_EDIT: {
            const data = state.todo.map((item, index) => {
                if (index === payload.pos) {
                    return {
                        userId: payload.userId,
                        todo: payload.todo,
                    };
                }
                return item;
            });
            localStorage.setItem('DataTodo', JSON.stringify(data));

            return {
                todo: data,
            };
        }


        case ACTION_DELETE: {
            const newData = [...state.todo];
            newData.splice(payload, 1);
            localStorage.setItem('DataTodo', JSON.stringify(newData))

            return ({
                ...state,
                todo: newData
            })
        }
        case ACTION_COMPLETE: {
            const data = state.todo.map((item, index) => {
                if (index === payload.index) {
                    return {
                        ...item,
                        completed: payload.select
                    };
                }
                return item;
            });
            localStorage.setItem('DataTodo', JSON.stringify(data));

            return {
                todo: data,
            };
        }

        default:
            return state;
    }

}


export default reducer;

