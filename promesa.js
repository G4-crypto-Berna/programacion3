function multiplicar(a, b) {
    return new Promise((resolve, reject) => {
        console.log(`Multiplicando ${a} x ${b}...`);

        setTimeout(() => {
            const resultado = a * b;
            if (resultado > 0) {
                resolve(resultado);
            } else {
                reject(`El resultado es negativo: ${resultado}`);
            }
        }, 10000);
    });
}

multiplicar(3, 4)
    .then(resultado => console.log("Resuelto con:", resultado))
    .catch(error => console.error("Rechazado:", error))
    .finally(() => console.log("Promesa finalizada"));

console.log("Holap");

multiplicar(5, -2)
    .then(resultado => console.log("Resuelto con:", resultado))
    .catch(error => console.error("Rechazado:", error))
    .finally(() => console.log("Promesa finalizada"));

console.log("que tul?");

multiplicar(-4, -3)
    .then(resultado => console.log("Resuelto con:", resultado))
    .catch(error => console.error("Rechazado:", error))
    .finally(() => console.log("Promesa finalizada 2"));