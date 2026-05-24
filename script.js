let vehiculoActivo = false;

let placaActual = "";

let horaEntrada = "";

function registrarEntrada(){

    const placa =
    document.getElementById("placa").value;

    if(placa == ""){

        alert("Ingrese una placa");

        return;

    }

    if(vehiculoActivo){

        alert("Ya existe un vehículo activo");

        return;

    }

    vehiculoActivo = true;

    placaActual = placa;

    horaEntrada = new Date();

    document.getElementById("info").innerHTML = `

        <strong>Vehículo:</strong>
        ${placa}

        <br>

        <strong>Hora Entrada:</strong>
        ${horaEntrada.toLocaleString()}

        <br><br>

        <span class="estado">

            ENTRADA AUTORIZADA

        </span>

    `;

    agregarLog(
        "ENTRADA -> " + placa
    );

}

function registrarSalida(){

    if(!vehiculoActivo){

        alert("No hay vehículos activos");

        return;

    }

    const salida = new Date();

    document.getElementById("info").innerHTML = `

        <strong>Vehículo:</strong>
        ${placaActual}

        <br>

        <strong>Hora Entrada:</strong>
        ${horaEntrada.toLocaleString()}

        <br>

        <strong>Hora Salida:</strong>
        ${salida.toLocaleString()}

        <br><br>

        <span class="estado"
        style="background:#ef4444;">

            SALIDA REGISTRADA

        </span>

    `;

    agregarLog(
        "SALIDA -> " + placaActual
    );

    vehiculoActivo = false;

    placaActual = "";

}

function agregarLog(texto){

    const logs =
    document.getElementById("logs");

    logs.innerHTML += `

        <div>

            [${new Date().toLocaleTimeString()}]

            ${texto}

        </div>

    `;

}