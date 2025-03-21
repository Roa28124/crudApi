import url from 'url';
import { routes } from './urls.js';

export const router = (req, res) => {
    const parseUrl = url.parse(req.url, true);  
    const path = parseUrl.pathname;  
    const trimmedPath = path.replace(/^\/+|\/+$/g, ''); 
    console.log(`Ruta solicitada: ${trimmedPath}`);  

   
    let handler;
    let id = null;
    
    if (trimmedPath.match(/^futbolistas\/\d+$/)) {
       
        id = trimmedPath.split('/')[1];  
        req.id = id; 
        handler = routes['futbolistas/:id'];  
    } else {
        handler = routes[trimmedPath]; 
    }

  
    if (handler) {
        handler(req, res);  
    } else {
        console.log('Ruta no encontrada');
        res.writeHead(404);
        res.end('Not Found');
    }
};
