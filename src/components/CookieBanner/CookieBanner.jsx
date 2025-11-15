import { useState } from 'react';

import { useConsent } from '../../context/ConsentContext';
import AnalyticsGate from './utils/AnalyticsGate';
import {
    BannerContainer,
    Content,
    Title,
    Description,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton
} from './styles/CookieBanner';


const CookieBanner = () => {
    const { consentState, acceptConsent, rejectConsent } = useConsent()
    // El banner solo es visible si no se ha tomado una decisión previamente
    const [isVisible, setIsVisible] = useState(
        !(consentState.analytics || consentState.advertising || consentState.advertising || consentState.functional)
    );

    // ... (Funciones handleAcceptAll y handleRejectAll permanecen iguales) ...
    const handleAcceptAll = () => {
        acceptConsent('analytics');
        acceptConsent('advertising');
        acceptConsent('functional');
        setIsVisible(false);
    };

    const handleRejectAll = () => {
        rejectConsent();
        setIsVisible(false);
    };


    return (
        <>
            <AnalyticsGate />
            {isVisible && (
                <BannerContainer>
                    <Content>
                        <Title>Declaración de Cumplimiento y Gestión de Cookies</Title>
                        <Description>
                            De conformidad con lo dispuesto en el Reglamento General UE 679/2016 de Protección de Datos (en adelante, “RGPD”) y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (en adelante, “LOPDGDD”) mediante la aceptación de la presente Política de Cookies el usuario web (en adelante, el “Usuario”) PRESTA SU CONSENTIMIENTO informado, expreso, libre e inequívoco para tratar los datos personales recabados a través del Sitio Web a través de la información recabada por las cookies.

                            Con el fin de facilitar la navegación por el Sitio Web con dominio  yandrydev.cloud  le comunica el uso cookies
                        </Description>
                    </Content>

                    <ButtonGroup>
                        {/* Botón Principal: Aceptar todo y cerrar */}
                        <PrimaryButton onClick={handleAcceptAll}>
                            Aceptar todas las cookies
                        </PrimaryButton>

                        {/* Botón Secundario: Rechazar todo y cerrar */}
                        <SecondaryButton onClick={handleRejectAll}>
                            Rechazar
                        </SecondaryButton>
                    </ButtonGroup>
                </BannerContainer>
            )}
        </>
    );
};

export default CookieBanner;