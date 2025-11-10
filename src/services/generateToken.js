export function generateToken() {
  return new Promise((resolve, reject) => {
    const url = "https://yandrydev.cloud/api/v1/generateToken"; //OOF

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.messague);
        }
        return res.json();
      })
      .then((response) => {
        resolve(response); // Resuelve la promesa con la respuesta
      })
      .catch((error) => {
        reject(error); // Rechaza la promesa con el error
      });
  });
}
