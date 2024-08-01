// Código base para un juego de tic-tac-toe en JavaScript
/*

Crear el tablero: Puedes representar el tablero como una matriz de 3x3, donde cada celda puede contener un valor para indicar si está vacía, ocupada por X o por O.

Alternar turnos: Necesitas llevar un registro de cuál jugador es el turno actual (X o O) y alternar entre ellos después de cada movimiento.

Validar movimientos: Antes de permitir que un jugador haga un movimiento, debes verificar si la celda seleccionada está vacía. Si no lo está, debes mostrar un mensaje de error.

Verificar ganador: Después de cada movimiento, debes verificar si hay un ganador. Esto implica comprobar si algún jugador ha completado una fila, columna o diagonal con sus fichas.

Finalizar el juego: Cuando haya un ganador o se llene todo el tablero sin un ganador, debes mostrar un mensaje indicando quién ganó o si hubo empate.

*/

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

function makeMove(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;

    // Verificar si hay un ganador o empate
    // Implementa esta lógica aquí

    // Alternar turno
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  } else {
    console.log("Celda ocupada, elige otra.");
  }
}

// Puedes continuar implementando las funciones restantes según los pasos mencionados anteriormente.
