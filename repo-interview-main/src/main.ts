import { createExpressServer } from "routing-controllers";
import 'dotenv/config';
import cors from 'cors';

let PORT = 3002;

// crea la configuración del servidor Express y habilita CORS
const app = createExpressServer({
  routePrefix: "/bp", 
  controllers: [
    __dirname + "/controllers/*{.js,.ts}",
  ], // especificamos los controladores que queremos usar
});
//agregar el cors para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: '*', // Permite solicitudes desde cualquier origen
}));

// Ejecuta la aplicación Express en el puerto 3002
app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});
