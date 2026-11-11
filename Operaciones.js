
/* ==========================================
   1. DATOS DE LOS CELULARES EN FORMATO JSON
========================================== */


const datosJSON = `[
    {
        "id": 1,
        "nombre": "iPhone 15",
        "marca": "Apple",
        "precio": 5500,
        "imagen": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        "descripcion": "Celular Apple con excelente rendimiento y cámara avanzada."
    },
    {
        "id": 2,
        "nombre": "Samsung Galaxy S24",
        "marca": "Samsung",
        "precio": 4800,
        "imagen": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        "descripcion": "Dispositivo Samsung con gran pantalla y tecnología moderna."
    },
    {
        "id": 3,
        "nombre": "Xiaomi Redmi Note 13",
        "marca": "Xiaomi",
        "precio": 1800,
        "imagen": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        "descripcion": "Un celular práctico con buenas características y precio accesible."
    },
    {
        "id": 4,
        "nombre": "iPhone 14",
        "marca": "Apple",
        "precio": 4200,
        "imagen": "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=500",
        "descripcion": "Celular Apple con diseño elegante y gran rendimiento."
    },
    {
        "id": 5,
        "nombre": "Samsung Galaxy A55",
        "marca": "Samsung",
        "precio": 2900,
        "imagen": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        "descripcion": "Un dispositivo equilibrado para el uso diario."
    },
    {
        "id": 6,
        "nombre": "Xiaomi Redmi 13C",
        "marca": "Xiaomi",
        "precio": 1100,
        "imagen": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        "descripcion": "Una alternativa económica para tus actividades diarias."
    },
    {
        "id": 7,
        "nombre": "iPhone 16 Pro Max",
        "marca": "Apple",
        "precio": 8500,
        "imagen": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        "descripcion": "Modelo de alta gama con cámara avanzada y gran rendimiento."
    },
    {
        "id": 8,
        "nombre": "iPhone 16",
        "marca": "Apple",
        "precio": 6800,
        "imagen": "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=500",
        "descripcion": "Un smartphone moderno con excelente rendimiento."
    },
    {
        "id": 9,
        "nombre": "iPhone 13",
        "marca": "Apple",
        "precio": 3500,
        "imagen": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        "descripcion": "Una opción Apple con buen rendimiento para el día a día."
    },
    {
        "id": 10,
        "nombre": "Samsung Galaxy S25 Ultra",
        "marca": "Samsung",
        "precio": 9200,
        "imagen": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        "descripcion": "Smartphone premium con pantalla amplia y funciones avanzadas."
    },
    {
        "id": 11,
        "nombre": "Samsung Galaxy A56",
        "marca": "Samsung",
        "precio": 3600,
        "imagen": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        "descripcion": "Un celular moderno pensado para el entretenimiento y uso diario."
    },
    {
        "id": 12,
        "nombre": "Samsung Galaxy Z Flip6",
        "marca": "Samsung",
        "precio": 7200,
        "imagen": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        "descripcion": "Celular plegable con diseño compacto y tecnología innovadora."
    },
    {
        "id": 13,
        "nombre": "Xiaomi 14T Pro",
        "marca": "Xiaomi",
        "precio": 5200,
        "imagen": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        "descripcion": "Un dispositivo potente con pantalla de gran calidad."
    },
    {
        "id": 14,
        "nombre": "Xiaomi Redmi Note 14 Pro",
        "marca": "Xiaomi",
        "precio": 2600,
        "imagen": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        "descripcion": "Un smartphone equilibrado con buenas características."
    },
    {
        "id": 15,
        "nombre": "POCO X6 Pro",
        "marca": "Xiaomi",
        "precio": 3200,
        "imagen": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        "descripcion": "Un celular orientado al rendimiento y los videojuegos."
    }
]`;


// Convertimos el texto JSON en una colección de objetos.
const celulares = JSON.parse(datosJSON);


/* ==========================================
   2. VARIABLES Y ELEMENTOS DEL CATÁLOGO
========================================== */

// Recuperamos el carrito guardado anteriormente.
let carrito = [];

try {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
} catch (error) {
    carrito = [];
}

// Elementos HTML del catálogo.
const listaProductos = document.getElementById("lista-productos");
const buscador = document.getElementById("buscar-celular");
const botonesFiltro = document.querySelectorAll(".filtro");

// Elementos HTML del carrito.
const contadorCarrito = document.getElementById("contador-carrito");
const ventanaCarrito = document.getElementById("ventana-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");

const botonAbrirCarrito = document.getElementById("abrir-carrito");
const botonCerrarCarrito = document.getElementById("cerrar-carrito");
const botonVaciarCarrito = document.getElementById("vaciar-carrito");


/* ==========================================
   3. MOSTRAR LOS CELULARES EN EL CATÁLOGO
========================================== */

function mostrarCelulares(lista) {

    // Comprobamos que estamos en la página del catálogo.
    if (!listaProductos) return;

    listaProductos.innerHTML = "";

    if (lista.length === 0) {
        listaProductos.innerHTML = "<p>No se encontraron celulares.</p>";
        return;
    }

    lista.forEach(function(celular) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <img src="${celular.imagen}" alt="${celular.nombre}">
            <h3>${celular.nombre}</h3>
            <p>${celular.descripcion}</p>
            <p class="precio">Bs. ${celular.precio}</p>
            <button class="boton agregar-carrito" data-id="${celular.id}">
                Agregar al carrito
            </button>
        `;

        listaProductos.appendChild(tarjeta);
    });

    // Agregamos eventos a los botones creados.
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");

    botonesAgregar.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const id = Number(boton.dataset.id);

            agregarAlCarrito(id);

        });

    });

}


/* ==========================================
   4. AGREGAR PRODUCTOS AL CARRITO
========================================== */

function agregarAlCarrito(id) {

    const celular = celulares.find(function(producto) {
        return producto.id === id;
    });

    if (celular) {

        carrito.push(celular);

        guardarCarrito();

        actualizarCarrito();

        mostrarContenidoCarrito();

        alert(celular.nombre + " agregado al carrito.");

    }

}


/* ==========================================
   5. GUARDAR EL CARRITO EN LOCALSTORAGE
========================================== */

function guardarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));

}


/* ==========================================
   6. ACTUALIZAR EL CONTADOR DEL CARRITO
========================================== */

function actualizarCarrito() {

    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
    }

}


/* ==========================================
   7. MOSTRAR EL CONTENIDO DEL CARRITO
========================================== */

function mostrarContenidoCarrito() {

    if (!listaCarrito || !totalCarrito) return;

    listaCarrito.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";

    } else {

        carrito.forEach(function(celular, indice) {

            total += celular.precio;

            const productoCarrito = document.createElement("div");

            productoCarrito.classList.add("item-carrito");

            productoCarrito.innerHTML = `
                <p>
                    ${celular.nombre} - Bs. ${celular.precio}
                </p>
                <button class="eliminar-producto" data-indice="${indice}">
                    Eliminar
                </button>
            `;

            listaCarrito.appendChild(productoCarrito);

        });

    }

    totalCarrito.textContent = "Total: Bs. " + total;

    // Eventos para eliminar productos individualmente.
    const botonesEliminar = document.querySelectorAll(".eliminar-producto");

    botonesEliminar.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const indice = Number(boton.dataset.indice);

            carrito.splice(indice, 1);

            guardarCarrito();

            actualizarCarrito();

            mostrarContenidoCarrito();

        });

    });

}


/* ==========================================
   8. ABRIR Y CERRAR LA VENTANA DEL CARRITO
========================================== */

function abrirCarrito() {

    if (ventanaCarrito) {
        ventanaCarrito.style.display = "flex";
        mostrarContenidoCarrito();
    }

}

function cerrarCarrito() {

    if (ventanaCarrito) {
        ventanaCarrito.style.display = "none";
    }

}

if (botonAbrirCarrito) {
    botonAbrirCarrito.addEventListener("click", abrirCarrito);
}

if (botonCerrarCarrito) {
    botonCerrarCarrito.addEventListener("click", cerrarCarrito);
}


/* ==========================================
   9. VACIAR EL CARRITO
========================================== */

if (botonVaciarCarrito) {

    botonVaciarCarrito.addEventListener("click", function() {

        carrito = [];

        guardarCarrito();

        actualizarCarrito();

        mostrarContenidoCarrito();

    });

}


/* ==========================================
   10. BUSCADOR DE CELULARES
========================================== */

if (buscador) {

    buscador.addEventListener("input", function() {

        const texto = buscador.value.toLowerCase();

        const resultado = celulares.filter(function(celular) {

            return celular.nombre.toLowerCase().includes(texto) ||
                   celular.marca.toLowerCase().includes(texto);

        });

        mostrarCelulares(resultado);

    });

}


/* ==========================================
   11. FILTROS POR MARCA
========================================== */

botonesFiltro.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const marcaSeleccionada = boton.dataset.marca;

        // Cambiamos el botón que aparece seleccionado.
        botonesFiltro.forEach(function(elemento) {
            elemento.classList.remove("activo");
        });

        boton.classList.add("activo");

        let resultado;

        if (marcaSeleccionada === "todos") {

            resultado = celulares;

        } else {

            resultado = celulares.filter(function(celular) {

                return celular.marca === marcaSeleccionada;

            });

        }

        mostrarCelulares(resultado);

    });

});


/* ==========================================
   12. FORMULARIO DE CONTACTO
========================================== */

const formulario = document.getElementById("formulario-contacto");
const respuestaFormulario = document.getElementById("respuesta-formulario");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {

            respuestaFormulario.textContent = "Por favor, completa todos los campos.";
            return;

        }

        respuestaFormulario.textContent =
            "¡Gracias, " + nombre + "! Tu mensaje fue registrado correctamente.";

        console.log("Datos del formulario:");
        console.log("Nombre: " + nombre);
        console.log("Correo: " + correo);
        console.log("Mensaje: " + mensaje);

        formulario.reset();

    });

}


/* ==========================================
   13. INICIALIZAR LAS FUNCIONES
========================================== */

// Estas funciones se ejecutan al cargar el archivo.
mostrarCelulares(celulares);

actualizarCarrito();

mostrarContenidoCarrito();
