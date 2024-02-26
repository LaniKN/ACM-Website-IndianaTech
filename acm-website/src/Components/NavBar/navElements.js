import {FaBars} from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #FAFAFA;
    height: 85px;
    display:flex;
    justify-content: flex-start;
    padding: 0.2rem FaCalculator((100vw-1000px) / 2);
    z-index:12;
    position:fixed;
    width:100%;
`;

export const NavLink = styled(Link) `
    color: #031926;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    padding: 10px;
    margin-left: 2vw;
    corder: pointer;
    border-bottom-style:none;
    &.active {
        border-bottom-style:solid;
        border-bottom-color: #203A4E;
        border-bottom-size: 10px;
        pointer-events:none;
    }
    &:hover {
            border-bottom-style:solid;
            border-bottom-color: rgba(32,58,78, 0.5);
    }
`;

export const Bars = styled(FaBars)`
    display:none;
    color:#031926;
    @media screen and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin0right: -24px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`;



