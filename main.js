import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"
class Main{
    constructor(){

    }

    pruebaCantidad(){
        
        let cantidad = new Cantidad (100,"gramos")
        console.log("-------Cantidad-------------")
        console.log(cantidad.getDescripcion())
        
    }

    pruebaIngrediente(){
        let ing1 = ("Azucar")
        let costo1 = (100)
        let ingrediente = new Ingrediente(new Cantidad(100,"gramos"), ing1,costo1)
        console.log("------Ingredientes----------")
        console.log(ingrediente.getDescripcion())
    }

    pruebaReceta(){
        let nombre= ("Receta")
        let autor = ("Juan Ramon")
        this.ing1 = new Ingrediente (new Cantidad(100,"gramos"),"Azucar", 40)
        this.ing2 = new Ingrediente (new Cantidad(200,"gramos"),"Harina", 30)
        let receta = new Receta (nombre,autor)
        console.log("-----Receta------")
        receta.agregarIngrediente(this.ing1)
        receta.agregarIngrediente(this.ing2)
        receta.getNumeroIngredientes()
        receta.getCosto()
        receta.imprimirEnConsola()
    }
    
}

let tester = new Main()
tester.pruebaCantidad()
tester.pruebaIngrediente()
tester.pruebaReceta()