import { BiBook, BiBriefcase, BiBuilding, BiCodeAlt, BiCube, BiCustomize, BiGrid, BiGroup, BiLogoFlask, BiPalette, BiPen, BiUser } from "react-icons/bi";

export const PORTFOLIO_CATEGORIES = {
    'all' : {
        classIcon: 'fad fa-grid',
        reactIcon: <BiGrid />,
        slug: 'all',
        label: 'All'
    },
    'code' : {
        classIcon: 'fad fa-code-simple',
        reactIcon: <BiCodeAlt />,
        slug: 'code',
        label: 'Code'
    },
    'uiux' : {
        classIcon: 'fad fa-pen-nib',
        reactIcon: <BiPen />,
        slug: 'uiux',
        label: 'UI/UX'
    },
    'design' : {
        classIcon: 'fad fa-palette',
        reactIcon: <BiPalette />,
        slug: 'design',
        label: 'Design'
    },
    'product' : {
        classIcon: 'fad fa-cube',
        reactIcon: <BiCube />,
        slug: 'product',
        label: 'Product'
    },
};

export const PORTFOLIO_TYPES = {
    office: {
        icon: <BiBuilding/>,
        label: "Office Project"
    },
    personal: {
        icon: <BiUser/>,
        label: "Personal Project"
    },
    team: {
        icon: <BiGroup/>,
        label: "Team Project"
    },
    client: {
        icon: <BiBriefcase/>,
        label: "Client Project"
    },
    open_source: {
        icon: <BiCodeAlt/>,
        label: "Open Source Project"
    },
    research: {
        icon: <BiLogoFlask/>,
        label: "Research Project"
    },
    academic: {
        icon: <BiBook/>,
        label: "Academic Project"
    }
};
