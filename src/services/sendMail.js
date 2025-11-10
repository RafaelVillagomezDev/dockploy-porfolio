export function sendEmail(token, formData) {
   const {data}=token
  return new Promise((resolve, reject) => {
    const url = "https://yandrydev.cloud/api/v1/send"; //OOF

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          // Verifica si la respuesta contiene errores antes de acceder
          return response.json().then((data) => {
            if (data.errors && Array.isArray(data.errors)) {
              const errorMessages = data.errors.map((error) => error.msg);
              const concatenatedMessages = errorMessages.join(", ");
              throw new Error(concatenatedMessages);
            } else {
              // Si no hay 'errors', arroja un mensaje genérico
              throw new Error("Error desconocido");
            }
          });
        }
        return response.json();
      })
      .then((data) => {
        resolve(data); // Resuelve la promesa con la respuesta
      })
      .catch((error) => {
        reject(error.message || error); // Rechaza la promesa con el mensaje de error
      });
  });
}
