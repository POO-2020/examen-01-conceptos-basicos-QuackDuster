export default class Receta{



    constructor(nombre, autor){
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = new Array

    }

    agregarIngrediente(ingrediente){
        this.ingredientes.push(ingrediente)
    }

    getNumeroIngredientes(){
        let num = 0
        this.ingredientes.forEach((i) =>{
           num = i
        })
        return num+1
    }

    getCosto(){
       let precioTotal = 0
        this.ingredientes.forEach((ingrediente) =>{
            precioTotal = (precioTotal + ingrediente.costo)
        })
        return precioTotal
        
        
    }

    imprimirEnConsola(){
       console.log(`${this.nombre}, ${this.autor} \n Ingredientes:`) 
        this.ingredientes.forEach((ingrediente,i) => {
            console.log(` ${i+1} ${ingrediente.getDescripcion()}`)
        })
        console.log(`Costo total: $${this.getCosto()} pesos.`)
    }
}