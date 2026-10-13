function convertirHora() {
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const fechaArg = Temporal.ZonedDateTime.from(`${fecha}T${hora}:00-03:00[America/Argentina/Buenos_Aires]`);

    const madrid = fechaArg.withTimeZone("Europe/Madrid");

    const shanghai = fechaArg.withTimeZone("Asia/Shanghai");

    const newyork = fechaArg.withTimeZone("America/New_York");

    document.getElementById("horario").innerHTML = `
    <p><strong>Argentina:</strong> ${fechaArg.toString()}</p>
    <p><strong>Madrid:</strong> ${madrid.toString()}</p>
    <p><strong>Shanghái:</strong> ${shanghai.toString()}</p>
    <p><strong>Nueva York:</strong> ${newyork.toString()}</p>
`;    
}