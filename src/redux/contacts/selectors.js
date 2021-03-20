import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getSorter = state => state.contacts.sorter;

export const getSortContacts = createSelector(
    [getAllContacts, getFilter, getSorter],
    (contacts, filter, sortBy) => {
        const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

        if (sortBy === 'abc') {
            return filteredContacts.sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                if (aName < bName) {
                    return -1;
                }
                if (aName > bName) {
                    return 1;
                }

                return 0;
            });
        }

        if (sortBy === 'date') {
            return filteredContacts.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }
                if (a.date > b.date) {
                    return -1;
                }

                return 0;
            });
        }
    }
);