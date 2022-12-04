const baseUrl = "http://localhost:8080/api/";

const request = (method) => (url, data) =>
  fetch(baseUrl + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

let personas = [
  {
    documento: "DNI33016247",
    nombre: "MESSI, LIONEL ANDRÉS",
    email: "mailprueba@gmail.com",
    password: "1234",
    rol: "USER",
  },
];

const mockRequest = (method) => async (url, data) => {
  if (method === "GET" && url === "persona") {
    return personas;
  }
  if (method === "POST" && url === "persona") {
    personas.push(data);
  }
  if (method === "PUT" && url.includes("persona")) {
    const dni = url.split("/")[1];
    personas = personas.map((p) => (p.documento === dni ? data : p));
  }
  if (method === "DELETE" && url.includes("persona")) {
    const dni = url.split("/")[1];
    personas = personas.filter((p) => p.documento !== dni);
  }
};

export const httpClient = {
  get: mockRequest("GET"),
  post: mockRequest("POST"),
  put: mockRequest("PUT"),
  patch: mockRequest("PATCH"),
  delete: mockRequest("DELETE"),
};
