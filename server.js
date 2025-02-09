const http = require('http');
const data = require('./data'); 

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
    </head>
    <body>
      <h1>${data.subtitle}</h1>
      <p>${data.description}</p>
      <footer>${data.footer}</footer>
    </body>
    </html>
  `;

  res.writeHead(200);
  res.end(htmlContent);
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
