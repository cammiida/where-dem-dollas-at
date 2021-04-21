import React, { useState } from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
} from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";

import clsx from "clsx";

import MyComponent from "./components/MyComponent/MyComponent";
import { useStyles } from "./AppStyles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

type MenuItemType = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const menuItems: MenuItemType[] = [
  { name: "Dashboard", url: "/dashboard", icon: <DashboardIcon /> },
  { name: "Accounts", url: "/accounts", icon: <BuildIcon /> },
];

type Props = {
  children?: React.ReactNode;
};

function App(props: Props) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const classes = useStyles();
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const routes = (
    <Switch>
      <Route path="/accounts">Accounts</Route>
      <Route exact path="/">
        <MyComponent />
      </Route>
      <Route>
        <Container>404</Container>
      </Route>
    </Switch>
  );

  const toolBar = (
    <Toolbar className={classes.toolbar}>
      <Box className={classes.toolbarItem}>
        <Avatar>C</Avatar>
      </Box>
    </Toolbar>
  );

  const drawer = (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        }),
      }}
    >
      <MenuList>
        {menuItems.map((menuItem, index) => {
          const selected =
            index === 0
              ? location.pathname === menuItem.url
              : location.pathname.includes(menuItem.url as string);

          return (
            <MenuItem
              key={menuItem.name}
              component={Link}
              to={menuItem.url}
              selected={selected}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText>{menuItem.name}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
      <MenuItem
        className={classes.toggleDrawerButton}
        button
        onClick={toggleDrawer}
      >
        <ListItemIcon>
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </ListItemIcon>
      </MenuItem>
    </Drawer>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerOpen,
          })}
        >
          {toolBar}
        </AppBar>
        {drawer}

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {routes}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
