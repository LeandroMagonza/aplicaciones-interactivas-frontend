// let personas = [
//   {
//     documento: "DNI33016247",
//     nombre: "MESSI, LIONEL ANDRÉS",
//     email: "mailprueba@gmail.com",
//     password: "1234",
//     rol: "USER",
//   },
// ];

// let edificios = [
//   {
//     nombre: "Edificio de Prueba",
//     direccion: "Calle False 123",
//     codigo: 1,
//   },
// ];

// let departamentos = [
//   {
//     piso: "8",
//     numero: "4",
//     habitado: true,
//     codigo: 1,
//     edificio: {
//       codigo: 1,
//       nombre: "SLS Puerto Madero",
//       direccion: "Mogliani 425",
//     },
//     inquilinos: [
//       {
//         documento: "DNI33016247",
//         nombre: "MESSI, LIONEL ANDRÉS",
//         email: "mailprueba@gmail.com",
//         password: "1234",
//         rol: "USER",
//       },
//     ],
//     duenios: [
//       {
//         documento: "DNI33016247",
//         nombre: "MESSI, LIONEL ANDRÉS",
//         email: "mailprueba@gmail.com",
//         password: "1234",
//         rol: "USER",
//       },
//     ],
//   },
// ];

// const mockRequest = (method) => async (url, data) => {
//   if (method === "GET" && url === "persona") {
//     return personas;
//   }
//   if (method === "POST" && url === "persona") {
//     personas.push(data);
//   }
//   if (method === "PUT" && url.includes("persona")) {
//     const dni = url.split("/")[1];
//     personas = personas.map((p) => (p.documento === dni ? data : p));
//   }
//   if (method === "DELETE" && url.includes("persona")) {
//     const dni = url.split("/")[1];
//     personas = personas.filter((p) => p.documento !== dni);
//   }
//   if (method === "GET" && url === "edificio") {
//     return edificios;
//   }
//   if (method === "POST" && url === "edificio") {
//     edificios.push(data);
//   }

//   if (method === "GET" && url.includes("inquilinos")) {
//     const codigo = url.split("/")[2];
//     return departamentos.find(
//       (depto) => String(depto.codigo) === String(codigo)
//     ).inquilinos;
//   }
//   if (method === "GET" && url.includes("duenio")) {
//     const codigo = url.split("/")[2];

//     return departamentos.find(
//       (depto) => String(depto.codigo) === String(codigo)
//     ).duenios;
//   }
//   if (method === "GET" && url.includes("unidad/edificio")) {
//     return departamentos;
//   }
//   if (method === "PUT" && url.includes("edificio")) {
//     const codigo = url.split("/")[1];
//     edificios = edificios.map((edificio) =>
//       edificio.codigo === codigo ? data : edificio
//     );
//   }
//   if (method === "DELETE" && url.includes("edificio")) {
//     const codigo = url.split("/")[1];

//     edificios = edificios.filter(
//       (edificio) => String(edificio.codigo) !== String(codigo)
//     );
//   }

//   if (method === "POST" && url === "unidad") {
//     departamentos.push({ ...data, codigo: Math.random() });
//   }
//   if (method === "PUT" && url.includes("unidad/")) {
//     const codigo = url.split("/")[1];
//     debugger;
//     departamentos = departamentos.map((depto) =>
//       String(depto.codigo) === String(codigo) ? data : depto
//     );
//   }
//   if (method === "DELETE" && url.includes("unidad")) {
//     const codigo = url.split("/")[1];
//     departamentos = departamentos.filter(
//       (depto) => String(depto.codigo) !== String(codigo)
//     );
//   }
//   if (method === "POST" && url.includes("agregar-inquilino")) {
//     const depto = departamentos.find(
//       (depto) => depto.codigo !== data.codigoUnidad
//     );
//     depto.inquilinos.push(personas.find((p) => p.documento === data.documento));
//   }
//   if (method === "POST" && url.includes("agregar-duenio")) {
//     const depto = departamentos.find(
//       (depto) => depto.codigo !== data.codigoUnidad
//     );
//     depto.duenios.push(personas.find((p) => p.documento === data.documento));
//   }
// };

// export const httpClient = {
//   get: mockRequest("GET"),
//   post: mockRequest("POST"),
//   put: mockRequest("PUT"),
//   patch: mockRequest("PATCH"),
//   delete: mockRequest("DELETE"),
// };



export const baseUrl = "http://localhost:8080/api/";

const request = (method) => async (url, data) => {

  const res = await fetch(baseUrl + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return res.json()

}
export const httpClient = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  patch: request("PATCH"),
  delete: request("DELETE"),
};

