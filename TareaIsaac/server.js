import http from 'http';
import { router } from './router.js';  

const server = http.createServer((req, res) => {
    router(req, res);  
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor corriendo 🏃‍♂️ en el puerto ${port}`);
});
