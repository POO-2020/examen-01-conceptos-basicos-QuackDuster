export default class Ingrediente {
    


    constructor(cantidad,nombre,costo){
        this.nombre = nombre
        this.cantidad = cantidad
        this.costo = costo 
    }

    getDescripcion(){
        return `${this.cantidad.getDescripcion()} de ${this.nombre} $${this.costo}`
    }
}