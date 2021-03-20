import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteContactRequest, 
    deleteContactSuccess, 
    deleteContactError,
    fetchContactRequest, 
    fetchContactSuccess, 
    fetchContactError,
    changeFilter, 
    changeSorting
} from './actions';

const items = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const sorter = createReducer('date', {
    [changeSorting]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const error = createReducer(null, {
    [fetchContactError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
    sorter,
    loading,
    error,
});