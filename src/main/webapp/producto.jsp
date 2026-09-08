<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Cartelera de Cine</title>
    
    <link rel="stylesheet" href="css/estilos.css">
    
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="js/productos.js"></script>
</head>
<body>

    <div class="container">
        <h1>Cartelera de Películas</h1>
        
        <button id="btnCargar">Cargar Cartelera</button>

        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Género</th>
                    <th>Duración</th>
                </tr>
            </thead>
            <tbody id="listaProductos">
                <!-- Se llena dinámicamente -->
            </tbody>
        </table>

        <input 
            type="text" 
            id="buscar" 
            placeholder="Buscar por título o género..."
        >
    </div>

</body>
</html>