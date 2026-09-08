$(document).ready(function () {

    let peliculas = [
        { id: "PEL-01", titulo: "Spider-Man: No Way Home", genero: "Acción", duracion: "148 min" },
        { id: "PEL-02", titulo: "Inception", genero: "Ciencia Ficción", duracion: "148 min" },
        { id: "PEL-03", titulo: "Interstellar", genero: "Aventura", duracion: "169 min" },
        { id: "PEL-04", titulo: "The Dark Knight", genero: "Acción", duracion: "152 min" },
        { id: "PEL-05", titulo: "Avengers: Endgame", genero: "Acción", duracion: "181 min" },
        { id: "PEL-06", titulo: "Avatar: The Way of Water", genero: "Ciencia Ficción", duracion: "192 min" },
        { id: "PEL-07", titulo: "Gladiador", genero: "Acción / Drama", duracion: "155 min" },
        { id: "PEL-08", titulo: "Jurassic Park", genero: "Aventura", duracion: "127 min" }
    ];

    $("#btnCargar").on("click", function () {

        // Limpia la tabla
        $("#listaProductos").empty();

        // Inserta todas las filas ocultas por defecto
        $.each(peliculas, function (index, p) {
            let fila =
                "<tr style='display:none;'>" +
                    "<td>" + p.id + "</td>" +
                    "<td>" + p.titulo + "</td>" +
                    "<td>" + p.genero + "</td>" +
                    "<td>" + p.duracion + "</td>" +
                "</tr>";

            $("#listaProductos").append(fila);
        });

        // EFECTO EN CASCADA: Hace aparecer cada fila secuencialmente con un pequeño retraso
        $("#listaProductos tr").each(function (index) {
            $(this).delay(index * 150).fadeIn(400);
        });

    });

    // Filtro de búsqueda en tiempo real
    $("#buscar").on("keyup", function() {
        let texto = $(this).val().toLowerCase();

        $("#listaProductos tr").filter(function() {
            $(this).toggle(
                $(this).text().toLowerCase().includes(texto)
            );
        });
    });

});