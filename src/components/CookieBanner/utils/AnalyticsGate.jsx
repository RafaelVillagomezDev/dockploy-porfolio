import { useEffect } from 'react';
import { useConsent } from '../../../context/ConsentContext';
// Necesita acceder al estado de consentimiento

// Tu ID de Google Analytics (lo mantenemos aquí, es su única dependencia)
const GA_MEASUREMENT_ID = "G-P6DWB14EL6"; 

// Función para inicializar GA
const initializeGA = () => {
    if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            send_page_view: true 
        });
        console.log("✅ GA inicializado: ¡Analíticas aceptadas!");
    } else {
        console.warn("❌ gtag no está disponible. Asegúrate de que el script base está en index.html.");
    }
};

const AnalyticsGate = () => {
  const { consentState } = useConsent()

  // 1. Usamos useEffect para asegurarnos de que solo se ejecute una vez al montar
  //    (y solo si el consentimiento ya está en true en el estado inicial)
  useEffect(() => {
    if (consentState.analytics) {
      initializeGA();
    }
    
    // Devolvemos una función de limpieza, aunque GA no suele necesitarla
    return () => {
        // Lógica opcional para 'deshabilitar' el seguimiento si fuera necesario
    };
    
  // 2. Dependencia clave: solo se ejecuta al montar el componente 
  //    y cuando el estado cambia. Si el componente se monta/renderiza es porque ya hay consentimiento.
  //    PERO la lógica más limpia es...
  }, [consentState.analytics]); 


  // Como este componente solo existe para inicializar el script,
  // NO necesita renderizar nada en el DOM.
  return null; 
};

export default AnalyticsGate;