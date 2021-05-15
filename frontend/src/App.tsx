import { gql, useQuery } from '@apollo/client';
import {
    CircularProgress,
    Container,
    createStyles,
    CssBaseline,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddTransactions from './components/features/transactions/AddTransactions';
import { Sidebar } from './components/UI';
import { SidebarItemType } from './types/Sidebar';
import { GetCurrentUser } from './__generated__/GetCurrentUser';

/*
TODO: Add dropzone or something similar
TODO: Add function to read file content
TODO: Add preview of file content
TODO: Save parsed file content
*/

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const GET_CURRENT_USER = gql`
    query GetCurrentUser {
        me {
            id
            name
        }
    }
`;

const sidebarItems: SidebarItemType[] = [
    { name: 'Dashboard', url: '/', icon: <DashboardIcon /> },
    { name: 'Accounts', url: '/accounts', icon: <BuildIcon /> },
    { name: 'Add Transactions', url: '/add-transactions', icon: <BuildIcon /> },
];

type Props = {
    children?: React.ReactNode;
};

const App: React.FC<Props> = (props: Props) => {
    console.log(props);
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const { data: currentUserData, loading, error } = useQuery<GetCurrentUser>(GET_CURRENT_USER);

    const toggleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    if (loading) return <CircularProgress />;
    if (error) return <div>An error occurred: {error.message}</div>;

    if (!currentUserData?.me) {
        return <>No user</>;
    }

    const routes = (
        <Switch>
            <Route exact path="/">
                <Typography>Home</Typography>
            </Route>
            <Route path="/accounts">
                <Typography>Accounts</Typography>
            </Route>
            <Route path="/add-transactions">
                <AddTransactions />
            </Route>
            <Route>
                <Container>404</Container>
            </Route>
        </Switch>
    );

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />

                <Sidebar sidebarItems={sidebarItems} isOpen={drawerOpen} toggleOpen={toggleDrawer} />
                <main className={classes.content}>{routes}</main>
            </div>
        </ThemeProvider>
    );
};

export default App;

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer - 100,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: 'transparent',
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },

        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);
