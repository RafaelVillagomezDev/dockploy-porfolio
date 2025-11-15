// ConsentContext.js (MODIFICADO para Persistencia)

import React, { createContext, useContext, useState, useEffect } from 'react';

// Clave donde guardaremos el estado en el navegador
const STORAGE_KEY = 'cookieConsent';

// Valor inicial por defecto (ningún consentimiento)
const DEFAULT_CONSENT = {
    analytics: false,
    advertising: false,
    functional: false,
};

// ----------------------------------------------------
// Lógica de Lectura/Escritura en localStorage
// ----------------------------------------------------

const getInitialConsent = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        // Si hay algo guardado, lo parseamos y lo retornamos
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error("Error al leer localStorage:", error);
    }
    // Si no hay nada o hay un error, retornamos el valor por defecto
    return DEFAULT_CONSENT;
};

// ----------------------------------------------------
// Proveedor del Consentimiento (Con persistencia)
// ----------------------------------------------------

export const useConsent = () => useContext(ConsentContext);
const ConsentContext = createContext();

export const ConsentProvider = ({ children }) => {
    // 👈 1. Usamos la función getInitialConsent para el estado inicial
    const [consentState, setConsentState] = useState(getInitialConsent);

    // 👈 2. Usamos useEffect para guardar el estado CADA VEZ que cambie
    useEffect(() => {
        try {
            // Guarda el objeto de consentimiento en localStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(consentState));
        } catch (error) {
            console.error("Error al escribir en localStorage:", error);
        }
    }, [consentState]); 
 

    const acceptConsent = (category) => {
        setConsentState(prev => ({
          ...prev,
          [category]: true,
        }));
    };
      
    const rejectConsent = () => {
        setConsentState({ analytics: false, advertising: false, functional: false });
    };

    return (
        <ConsentContext.Provider value={{ consentState, acceptConsent, rejectConsent }}>
            {children}
        </ConsentContext.Provider>
    );
};