import React from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarItems } from '../../data/sidebarItems';

type PageTitleProps = {};

const PageTitle: React.FC<PageTitleProps> = ({}) => {
    const { pathname } = useLocation();

    const currentPageName = sidebarItems.find((sidebarItem) => pathname.includes(sidebarItem.url))?.name;
    return <div>{currentPageName ?? 'No page matched'}</div>;
};

export default PageTitle;
