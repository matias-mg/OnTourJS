import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/logo.png'
import AuthContext from '../../../context/auth/authContext';

const Styles = styled.div`
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.7rem 2rem;
        z-index: 1;
        width: 100%;
        border-bottom: solid 1px var(--primary-color);
        opacity: 0.9;
        margin-bottom: 1rem;
        color: rgb(241, 240, 240);
    }

    .navbar ul {
        display: flex;
    }

    .navbar a {
        color: #fff;
        padding: 0.45rem;
        margin: 0 0.25rem;
    }
      
    .navbar a:hover {
        color: var(--light-color);
    }
      
    .navbar .welcome span {
        margin-right: 0.6rem;
    }

    .bg-primary {
        background-color: #003699!important;
    }

    ul {
        list-style: none;
    }

    a, h1 {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    span {
        display: inline-block;
        vertical-align: middle;
    }
`;

const NavbarUser = () => {
    const authContext = useContext(AuthContext);
    const { logout } = authContext;

    const onLogout = () => {
        logout();
    }

    return (
        <Styles>
            <div className="navbar bg-primary">
                <img
                    src={logo}
                    width="164"
                    height="59"
                    alt="Logo OnTour"
                    className="noafi"
                />
                <ul className="align">
                    <li style={{ marginTop: "13px" }}><Link to="/user"><i className="fas fa-home mr-1"></i>Home</Link></li>
                    <li style={{ marginTop: "13px" }}><Link to="/user/lista-contratos"><i className="fas fa-file-contract mr-1"></i>Contratos</Link></li>
                    <li style={{ marginTop: "13px" }}><Link to="/user/depositar"><i className="fas fa-hand-holding-usd mr-1"></i>Depósitar</Link></li>
                    <li style={{ marginTop: "13px" }}><Link to="/" onClick={onLogout}><i className="fas fa-power-off mr-2"></i>Logout</Link></li>
                </ul>
            </div>
        </Styles>
    )
}

export default NavbarUser;
