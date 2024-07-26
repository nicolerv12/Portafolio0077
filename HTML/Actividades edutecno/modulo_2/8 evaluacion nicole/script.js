alert("bienvenido a banca en linea")

// Datos de los clientes
const clientes = [
    { nombre: 'Juan Pérez', identificador: 'juan123', clave: 'clavejuan123', saldo: 1500 },
    { nombre: 'María García', identificador: 'maria456', clave: 'clavemaria456', saldo: 2800 },
    { nombre: 'Pedro López', identificador: 'pedro789', clave: 'clavepedro789', saldo: 800 }
];

// Función para manejar el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Buscar el cliente por identificador y clave
    const cliente = clientes.find(cliente => cliente.identificador === userId && cliente.clave === password);

    if (cliente) {
        // Mostrar el menú y opciones de transacción
        mostrarMenu(cliente);
    } else {
        // Mostrar mensaje de error si las credenciales no coinciden
        document.getElementById('message').innerHTML = '<p class="error">Identificador o contraseña incorrectos. Inténtelo nuevamente.</p>';
    }
});

// Función para mostrar el menú y manejar las opciones
function mostrarMenu(cliente) {
    let saldoActual = cliente.saldo;

    const menuHTML = `
        <h2>¡Bienvenido, ${cliente.nombre}!</h2>
        <p>Su saldo actual es: $${saldoActual}</p>
        <h3>Menú de opciones:</h3>
        <ul>
            <li><button onclick="verSaldo(${cliente.saldo})">Ver saldo</button></li>
            <li><button onclick="realizarGiro(${cliente.saldo})">Realizar giro</button></li>
            <li><button onclick="realizarDeposito(${cliente.saldo})">Realizar depósito</button></li>
            <li><button onclick="salir()">Salir</button></li>
        </ul>
        <div id="transaccionMessage"></div>
    `;

    document.getElementById('message').innerHTML = menuHTML;
}

// Función para mostrar el saldo actual
function verSaldo(saldo) {
    document.getElementById('transaccionMessage').innerHTML = `<p>Su saldo actual es: $${saldo}</p>`;
}

// Función para realizar un giro
function realizarGiro(saldo) {
    const monto = prompt(`Ingrese el monto que desea girar (Saldo actual: $${saldo}):`);

    if (monto === null || isNaN(monto) || parseFloat(monto) <= 0) {
        document.getElementById('transaccionMessage').innerHTML = '<p class="error">Monto inválido.</p>';
    } else {
        const nuevoSaldo = saldo - parseFloat(monto);
        actualizarSaldo(nuevoSaldo);
    }
}

// Función para realizar un depósito
function realizarDeposito(saldo) {
    const monto = prompt(`Ingrese el monto que desea depositar (Saldo actual: $${saldo}):`);

    if (monto === null || isNaN(monto) || parseFloat(monto) <= 0) {
        document.getElementById('transaccionMessage').innerHTML = '<p class="error">Monto inválido.</p>';
    } else {
        const nuevoSaldo = saldo + parseFloat(monto);
        actualizarSaldo(nuevoSaldo);
    }
}

// Función para actualizar el saldo y mostrar el resultado
function actualizarSaldo(nuevoSaldo) {
    // Actualizar el saldo del cliente en el array de clientes
    const userId = document.getElementById('userId').value;
    const clienteIndex = clientes.findIndex(cliente => cliente.identificador === userId);
    clientes[clienteIndex].saldo = nuevoSaldo;

    // Mostrar mensaje de éxito y actualizar el menú con el nuevo saldo
    document.getElementById('transaccionMessage').innerHTML = `<p>Transacción realizada correctamente. Su nuevo saldo es: $${nuevoSaldo}</p>`;
    mostrarMenu(clientes[clienteIndex]); // Mostrar el menú actualizado
}

// Función para salir del menú
function salir() {
    document.getElementById('message').innerHTML = ''; // Limpiar el contenido del mensaje
}



