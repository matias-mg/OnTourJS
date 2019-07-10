import React, { useContext } from 'react'
import ContractContext from '../../context/contract/contractContext';
import Contracts from '../../components/userTipes/user/contracts/Contracts';
import NavbarUser from '../../components/userTipes/user/NavbarUser';
import styled from 'styled-components';
import { Layout } from '../../components/bootstrap/Layout';

const Styles = styled.div`
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }

    body {
        background-color: #fff!important;
    }
    
    h1 {
        color: var(--primary-color);
        margin-bottom: 2rem;
    }

    h1 {
        margin-bottom: 10px;
    }

    .container {
        max-width: 1600px;
    }

    .divm {
        width: 1000px;
    }

    .bordecito {
        border: 2px solid gray;
        border-radius: 10px;
        padding: 20px;
    }
`;

const UserHome = () => {
    const contractContext = useContext(ContractContext);
    const { contracts } = contractContext;

    return (
        <Styles>
            <NavbarUser />
            <Layout>
                <div>
                    <h1 className="display-4 lead text-center mb-1">¡Bienvenido!</h1>
                    <p className="lead text-center">¿Qué deseas hacer hoy?</p>
                </div>
                <div className="grid-2" style={{ paddingTop: "30px", marginBottom: "100px" }}>
                    <div className="divm bordecito">
                        <h1 className="lead text-center"><strong>Información general</strong></h1>
                        <p className="lead">Aquí irá la información que suben los ejecutivos de ventas como Dashboard~</p>
                    </div>
                    <div className="bordecito">
                        <h1 className="lead text-center"><strong>Contratos activos</strong></h1>
                        <Contracts contracts={contracts} />
                    </div>
                </div>
            </Layout>
        </Styles>
    )
}

export default UserHome
