import BuildIcon from '@material-ui/icons/Build';
import React from 'react';
import ImportPage from '../components/features/imports/ImportPage';
import AddTransactions from '../components/features/transactions/AddTransactions';
import { SidebarItemType } from '../types/Sidebar';

export const sidebarItems: SidebarItemType[] = [
    { name: 'Accounts', url: '/accounts', icon: <BuildIcon /> },
    { name: 'Add Transactions', url: '/add-transactions', icon: <BuildIcon />, component: <AddTransactions /> },
    { name: 'Import', url: '/import', icon: <BuildIcon />, component: <ImportPage /> },
];
