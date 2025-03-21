let comidasTipicas = [];

const obtenerComidasTipicas = () => comidasTipicas;

const crearComidaTipica = (comida) => {
    comidasTipicas.push(comida);
};

const actualizarComidaTipica = (id, comidaActualizada) => {
    const index = comidasTipicas.findIndex(c => c.id === id);
    if (index !== -1) {
        comidasTipicas[index] = { ...comidasTipicas[index], ...comidaActualizada };
    }
};

const eliminarComidaTipica = (id) => {
    comidasTipicas = comidasTipicas.filter(c => c.id !== id);
};

export { obtenerComidasTipicas, crearComidaTipica, actualizarComidaTipica, eliminarComidaTipica };
