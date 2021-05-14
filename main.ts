let Factor_1 = 0
let Factor_2 = 0
let Producto = 0
input.onButtonPressed(Button.A, function () {
    Factor_1 = randint(0, 9)
    Factor_2 = randint(0, 9)
    basic.showNumber(Factor_1)
    basic.pause(200)
    basic.showString("x")
    basic.pause(200)
    basic.showNumber(Factor_2)
    basic.pause(200)
    basic.clearScreen()
})
/**
 * Instrucciones
 * 
 * -Al presionar botón A la micro bit escoge al azar 2 factores a multiplicar
 * 
 * -Al presionar botón B la micro bit muestra el producto de los 2 últimos factores escogidos
 */
input.onButtonPressed(Button.B, function () {
    Producto = Factor_1 * Factor_2
    basic.showNumber(Producto)
    basic.pause(200)
    basic.clearScreen()
})
