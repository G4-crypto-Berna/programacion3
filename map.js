const inventario = new Map([
    ['manzanas', 50],
    ['peras', 30],
    ['naranjas', 25],
    ['platanos', 40]
]);

inventario.set("manzanas", inventario.get("manzanas") -5);
inventario.set("peras", inventario.get("peras") -10);
inventario.set("naranjas", inventario.get("naranjas") -3);

inventario.set("kiwis", 15);
console.log(inventario.get("peras") >= 25);

for (const [producto, stock] of inventario) {
    if (stock < 10) {
        console.log(producto, stock);
    }
}

let total = 0;
for (const stock of inventario.values()) {
    total += stock;
}
console.log(total);

