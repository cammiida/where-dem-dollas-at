import {
    createStyles,
    Drawer,
    ListItemIcon,
    ListItemText,
    makeStyles,
    MenuItem,
    MenuList,
    Theme,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarItemType } from '../../types/Sidebar';

type SidebarProps = {
    sidebarItems: SidebarItemType[];
    isOpen: boolean;
    toggleOpen: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ sidebarItems, isOpen, toggleOpen }: SidebarProps) => {
    const location = useLocation();

    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                }),
            }}
        >
            <MenuList className={classes.menu}>
                {sidebarItems.map((sidebarItem, index) => {
                    const selected =
                        index === 0
                            ? location.pathname === sidebarItem.url
                            : location.pathname.includes(sidebarItem.url as string);

                    return (
                        <MenuItem key={sidebarItem.name} component={Link} to={sidebarItem.url} selected={selected}>
                            <ListItemIcon>{sidebarItem.icon}</ListItemIcon>
                            <ListItemText>{sidebarItem.name}</ListItemText>
                        </MenuItem>
                    );
                })}
                <MenuItem className={classes.toggleDrawerButton} button onClick={toggleOpen}>
                    <ListItemIcon>{isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ListItemIcon>
                </MenuItem>
            </MenuList>
        </Drawer>
    );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        menu: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '&:last-child': {
                justifySelf: 'flex-end',
            },
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(7) + 1,
            },
        },
        toggleDrawerButton: {
            marginTop: 'auto',
        },
    }),
);
