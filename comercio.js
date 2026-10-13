class producto{
    constructor(id, nombre, categoria, precio, origen){

        this.id = id;

        this.nombre = nombre;

        this.categoria = categoria;

        this.precio = precio;

        this.origen = origen;

    }
    esbarato() {
        return this.precio < 3000;
    }


    aplicardescuento(porcentaje) {

        let descuento = this.precio * (porcentaje/100);
        this.precio = this.precio - descuento;
        return this.precio;

    }

}