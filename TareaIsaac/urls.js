import * as api from './home.js';

export const routes = {
    'comidas-tipicas': api.home,        
    'comidas-tipicas/:id': api.home,      
};
