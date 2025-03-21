import { obtenerFutbolistas, crearFutbolista, actualizarFutbolista, eliminarFutbolista } from './futbolistas.js';
import { parser } from './parser.js';

export const home = async (req, res) => {
    const method = req.method;
    const id = req.id ? parseInt(req.id, 10) : null;  

    if (method === "GET" && req.url === "/futbolistas") {
        const futbolistas = obtenerFutbolistas();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(futbolistas));
    } else if (method === "POST" && req.url === "/futbolistas") {
        
        const data = await parser(req);
        crearFutbolista(data);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Futbolista creado" }));
    } else if (method === "PUT" && req.url.startsWith("/futbolistas/")) {
      
        const data = await parser(req);
        actualizarFutbolista(id, data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Futbolista actualizado" }));
    } else if (method === "DELETE" && req.url.startsWith("/futbolistas/")) {
      
        if (id) {
            const futbolistaExistente = obtenerFutbolistas().find(f => f.id === id);
            if (futbolistaExistente) {
                eliminarFutbolista(id);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Futbolista eliminado" }));
            } else {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Futbolista no encontrado" }));
            }
        } else {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "ID de futbolista inválido" }));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Ruta no encontrada" }));
    }
};
