export const pushToDataLayer = (data) => {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push(data);
        console.log("dataLayer PUSH:", data);
    } else {
        console.warn("dataLayer is not initialized.");
    }
};