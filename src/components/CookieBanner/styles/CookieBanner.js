import styled, { css } from 'styled-components';

// Variables de Diseño (puedes ajustarlas)
const colors = {
    primary: '#0070f3', // Azul para la acción principal
    secondary: '#f7f7f7', // Blanco/Gris claro para fondo
    text: '#1a1a1a',
    darkText: '#ffffff',
    borderColor: '#e8e8e8',
};

// --- Contenedor Principal ---
export const BannerContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
    // Diseño moderno: barra ancha en la parte inferior
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 1.5rem;
    background-color: ${colors.secondary};
    border-top: 1px solid ${colors.borderColor};
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }
`;

// --- Texto y Contenido ---
export const Content = styled.div`
    color: ${colors.text};
    flex-grow: 1;
    margin-right: 20px;
    line-height: 1.5;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 15px;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    font-size: 1em;
`;

export const Description = styled.p`
    margin: 0;
    font-size: 0.875em; /* 14px */
    
    // Enlace a la política de privacidad
    a {
        color: ${colors.primary};
        text-decoration: underline;
        font-weight: 500;
        &:hover {
            text-decoration: none;
        }
    }
`;

// --- Botones y Acciones ---
export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        width: 100%;
        gap: 5px;
    }
`;

const BaseButton = css`
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875em;
    font-weight: 600;
    transition: background-color 0.3s, border-color 0.3s;
    
    @media (max-width: 768px) {
        flex-grow: 1;
        padding: 12px 10px;
    }
`;

export const PrimaryButton = styled.button`
    ${BaseButton}
    background-color: ${colors.primary};
    color: ${colors.darkText};
    border: none;
    
    &:hover {
        background-color: #005bb5;
    }
`;

export const SecondaryButton = styled.button`
    ${BaseButton}
    background-color: transparent;
    color: ${colors.text};
    border: 1px solid ${colors.borderColor};
    
    &:hover {
        background-color: ${colors.borderColor};
    }
`;