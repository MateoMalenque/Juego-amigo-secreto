// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
let amigos = document.getElementById("amigo");

function agregarNombres(lista){
    console.log(lista);
}

function agregarAmigo() {
    // Seleccionar el input y obtener su valor
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Elimina espacios al inicio y al final

    // Validar que el input no esté vacío
    if (nombre === '') {
      alert('Por favor, escribe el nombre de tu amigo.');
      return;
    }

    listaNombres.push(nombre);

    // Crear un nuevo elemento <li> con el nombre
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;

    // Agregar el elemento a la lista
    lista.appendChild(li);

    // Limpiar el input después de agregar
    input.value = '';
  }

  function sortearAmigo() {
    // Validamos que haya amigos en la lista
    if (listaNombres.length === 0) {
      alert('No hay amigos en la lista para sortear.');
      return;
    }

    // Generamos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);

    // Obtenemos el nombre del amigo sorteado
    const amigoSorteado = listaNombres[indiceAleatorio];

    // Mostramos el resultado del sorteo
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
  }

  function limpiarLista(){
    limpiarLista.length = 0;
    const lista = document.getElementById('listaAmigos');
      lista.innerHTML = '';
      alert('La lista de amigos y el sorteo se han reiniciado.');
  }