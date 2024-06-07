// document.addEventListener('DOMContentLoaded', () => {
//     const products = [
//         { id: 1, nombre: "Baúl 1", category: "baules", precio: 100, imagen: "../media/baul1.jpg", featured: true },
//         { id: 2, name: "Baúl 2", category: "baules", price: 150, image: "../media/baul2.png", featured: false },
//         { id: 3, name: "Baúl 3", category: "baules", price: 200, image: "../media/baul3.avif", featured: false },
//         { id: 4, name: "Baúl 4", category: "baules", price: 250, image: "../media/baul4.png", featured: true },
//         { id: 5, name: "Baúl 5", category: "baules", price: 300, image: "../media/baul5.png", featured: false },
//         { id: 6, name: "Baúl 6", category: "baules", price: 350, image: "../media/baul6.png", featured: true },
//         { id: 7, name: "Pantalla CarPlay 1", category: "pantallas", price: 400, image: "../media/carplay1.png", featured: true },
//         { id: 8, name: "Pantalla CarPlay 2", category: "pantallas", price: 450, image: "../media/carplay2.png", featured: false },
//         { id: 9, name: "Pantalla CarPlay 3", category: "pantallas", price: 500, image: "../media/carplay3.png", featured: false },
//         { id: 10, name: "Pantalla CarPlay 4", category: "pantallas", price: 550, image: "../media/carplay4.png", featured: true },
//         { id: 11, name: "Pantalla CarPlay 5", category: "pantallas", price: 600, image: "../media/carplay5.png", featured: false },
//         { id: 12, name: "Pantalla CarPlay 6", category: "pantallas", price: 650, image: "../media/carplay6.png", featured: true },
//         { id: 13, name: "Intercomunicador 1", category: "intercomunicadores", price: 700, image: "../media/intercom1.png", featured: true },
//         { id: 14, name: "Intercomunicador 2", category: "intercomunicadores", price: 750, image: "../media/intercom2.png", featured: false },
//         { id: 15, name: "Intercomunicador 3", category: "intercomunicadores", price: 800, image: "../media/intercom3.png", featured: false },
//         { id: 16, name: "Intercomunicador 4", category: "intercomunicadores", price: 850, image: "../media/intercom4.png", featured: true },
//         { id: 17, name: "Intercomunicador 5", category: "intercomunicadores", price: 900, image: "../media/intercom5.png", featured: false },
//         { id: 18, name: "Intercomunicador 6", category: "intercomunicadores", price: 950, image: "../media/intercom6.png", featured: true },
//         { id: 19, name: "Campera 1", category: "camperas", price: 1000, image: "../media/campera1.png", featured: true },
//         { id: 20, name: "Campera 2", category: "camperas", price: 1050, image: "../media/campera2.png", featured: false },
//         { id: 21, name: "Campera 3", category: "camperas", price: 1100, image: "../media/campera3.png", featured: false },
//         { id: 22, name: "Campera 4", category: "camperas", price: 1150, image: "../media/campera4.png", featured: true },
//         { id: 23, name: "Campera 5", category: "camperas", price: 1200, image: "../media/campera5.png", featured: false },
//         { id: 24, name: "Campera 6", category: "camperas", price: 1250, image: "../media/campera6.png", featured: true }
//     ];

//     const carouselContainer = document.querySelector('.carousel');
//     const productGrid = document.getElementById('productGrid');
//     const categoryFilter = document.getElementById('categoryFilter');
//     const priceFilter = document.getElementById('priceFilter');

//     function createProductCard(Producto) {
//         const carrito = document.createElement('div');
//         card.className = 'product-card';
//         card.innerHTML = `
//             <img src="${producto.imagen}" alt="${producto.nombre}">
//             <h5>${producto.nombre}</h5>
//             <p class="price">$${producto.precio}</p>
//             <button class="add-to-cart" onclick="addToCart(${product.id})">Agregar al carrito</button>
//         `;
//         return card;
//     }

//     function loadFeaturedProducts() {
//         const featuredProducts = products.filter(product => product.featured);
//         featuredProducts.forEach(product => {
//             const card = createProductCard(product);
//             carouselContainer.appendChild(card);
//         });
//     }

//     function loadAllProducts(filteredProducts = products) {
//         productGrid.innerHTML = '';
//         filteredProducts.forEach(product => {
//             const card = createProductCard(product);
//             productGrid.appendChild(card);
//         });
//     }

//     function filterProducts() {
//         const category = categoryFilter.value;
//         const priceOrder = priceFilter.value;

//         let filteredProducts = products;

//         if (category !== 'all') {
//             filteredProducts = filteredProducts.filter(product => product.category === category);
//         }

//         if (priceOrder === 'asc') {
//             filteredProducts.sort((a, b) => a.price - b.price);
//         } else if (priceOrder === 'desc') {
//             filteredProducts.sort((a, b) => b.price - a.price);
//         }

//         loadAllProducts(filteredProducts);
//     }

//     function initCarousel() {
//         const leftBtn = document.querySelector('.left-btn');
//         const rightBtn = document.querySelector('.right-btn');
//         let scrollPosition = 0;

//         leftBtn.addEventListener('click', () => {
//             scrollPosition -= 300; // Adjust this value as needed
//             if (scrollPosition < 0) {
//                 scrollPosition = 0;
//             }
//             carouselContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
//         });

//         rightBtn.addEventListener('click', () => {
//             scrollPosition += 300; // Adjust this value as needed
//             if (scrollPosition > carouselContainer.scrollWidth - carouselContainer.clientWidth) {
//                 scrollPosition = carouselContainer.scrollWidth - carouselContainer.clientWidth;
//             }
//             carouselContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
//         });
//     }

//     window.addToCart = function(productId) {
//         const product = products.find(p => p.id === productId);
//         let cart = JSON.parse(localStorage.getItem('carrito')) || [];

//         const existingProductIndex = cart.findIndex(p => p.id === productId);
//         if (existingProductIndex > -1) {
//             cart[existingProductIndex].cantidad += 1;
//         } else {
//             product.cantidad = 1;
//             cart.push(product);
//         }

//         localStorage.setItem('carrito', JSON.stringify(cart));

//         // Mostrar alerta de SweetAlert2
//         Swal.fire({
//             title: 'Producto agregado',
//             text: 'El producto ha sido agregado al carrito.',
//             icon: 'success',
//             confirmButtonText: 'Aceptar'
//         });
//     };

//     document.getElementById('categoryFilter').addEventListener('change', filterProducts);
//     document.getElementById('priceFilter').addEventListener('change', filterProducts);

//     loadFeaturedProducts();
//     loadAllProducts();
//     initCarousel();
// });



document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: "Baúl 1", categoria: "baules", precio: 100, imagen: "../media/baul1.jpg", destacado: true },
        { id: 2, nombre: "Baúl 2", categoria: "baules", precio: 150, imagen: "../media/baul2.png", destacado: false },
        { id: 3, nombre: "Baúl 3", categoria: "baules", precio: 200, imagen: "../media/baul3.avif", destacado: false },
        { id: 4, nombre: "Baúl 4", categoria: "baules", precio: 250, imagen: "../media/baul4.png", destacado: true },
        { id: 5, nombre: "Baúl 5", categoria: "baules", precio: 300, imagen: "../media/baul5.png", destacado: false },
        { id: 6, nombre: "Baúl 6", categoria: "baules", precio: 350, imagen: "../media/baul6.png", destacado: true },
        { id: 7, nombre: "Pantalla CarPlay 1", categoria: "pantallas", precio: 400, imagen: "../media/carplay1.png", destacado: true },
        { id: 8, nombre: "Pantalla CarPlay 2", categoria: "pantallas", precio: 450, imagen: "../media/carplay2.png", destacado: false },
        { id: 9, nombre: "Pantalla CarPlay 3", categoria: "pantallas", precio: 500, imagen: "../media/carplay3.png", destacado: false },
        { id: 10, nombre: "Pantalla CarPlay 4", categoria: "pantallas", precio: 550, imagen: "../media/carplay4.png", destacado: true },
        { id: 11, nombre: "Pantalla CarPlay 5", categoria: "pantallas", precio: 600, imagen: "../media/carplay5.png", destacado: false },
        { id: 12, nombre: "Pantalla CarPlay 6", categoria: "pantallas", precio: 650, imagen: "../media/carplay6.png", destacado: true },
        { id: 13, nombre: "Intercomunicador 1", categoria: "intercomunicadores", precio: 700, imagen: "../media/intercom1.png", destacado: true },
        { id: 14, nombre: "Intercomunicador 2", categoria: "intercomunicadores", precio: 750, imagen: "../media/intercom2.png", destacado: false },
        { id: 15, nombre: "Intercomunicador 3", categoria: "intercomunicadores", precio: 800, imagen: "../media/intercom3.png", destacado: false },
        { id: 16, nombre: "Intercomunicador 4", categoria: "intercomunicadores", precio: 850, imagen: "../media/intercom4.png", destacado: true },
        { id: 17, nombre: "Intercomunicador 5", categoria: "intercomunicadores", precio: 900, imagen: "../media/intercom5.png", destacado: false },
        { id: 18, nombre: "Intercomunicador 6", categoria: "intercomunicadores", precio: 950, imagen: "../media/intercom6.png", destacado: true },
        { id: 19, nombre: "Campera 1", categoria: "camperas", precio: 1000, imagen: "../media/campera1.png", destacado: true },
        { id: 20, nombre: "Campera 2", categoria: "camperas", precio: 1050, imagen: "../media/campera2.png", destacado: false },
        { id: 21, nombre: "Campera 3", categoria: "camperas", precio: 1100, imagen: "../media/campera3.png", destacado: false },
        { id: 22, nombre: "Campera 4", categoria: "camperas", precio: 1150, imagen: "../media/campera4.png", destacado: true },
        { id: 23, nombre: "Campera 5", categoria: "camperas", precio: 1200, imagen: "../media/campera5.png", destacado: false },
        { id: 24, nombre: "Campera 6", categoria: "camperas", precio: 1250, imagen: "../media/campera6.png", destacado: true }
    ];

    const contenedorCarrusel = document.querySelector('.carousel');
    const grillaProductos = document.getElementById('productGrid');
    const filtroCategoria = document.getElementById('categoryFilter');
    const filtroPrecio = document.getElementById('priceFilter');

    function crearTarjetaProducto(producto) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'product-card';
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h5>${producto.nombre}</h5>
            <p class="price">$${producto.precio}</p>
            <button class="add-to-cart" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        return tarjeta;
    }

    function cargarProductosDestacados() {
        const productosDestacados = productos.filter(producto => producto.destacado);
        productosDestacados.forEach(producto => {
            const tarjeta = crearTarjetaProducto(producto);
            contenedorCarrusel.appendChild(tarjeta);
        });
    }

    function cargarTodosLosProductos(productosFiltrados = productos) {
        grillaProductos.innerHTML = '';
        productosFiltrados.forEach(producto => {
            const tarjeta = crearTarjetaProducto(producto);
            grillaProductos.appendChild(tarjeta);
        });
    }

    function filtrarProductos() {
        const categoria = filtroCategoria.value;
        const ordenPrecio = filtroPrecio.value;

        let productosFiltrados = productos;

        if (categoria !== 'all') {
            productosFiltrados = productosFiltrados.filter(producto => producto.categoria === categoria);
        }

        if (ordenPrecio === 'asc') {
            productosFiltrados.sort((a, b) => a.precio - b.precio);
        } else if (ordenPrecio === 'desc') {
            productosFiltrados.sort((a, b) => b.precio - a.precio);
        }

        cargarTodosLosProductos(productosFiltrados);
    }

    function inicializarCarrusel() {
        const btnIzquierda = document.querySelector('.left-btn');
        const btnDerecha = document.querySelector('.right-btn');
        let posicionScroll = 0;

        btnIzquierda.addEventListener('click', () => {
            posicionScroll -= 300; // Ajusta este valor según sea necesario
            if (posicionScroll < 0) {
                posicionScroll = 0;
            }
            contenedorCarrusel.scrollTo({ left: posicionScroll, behavior: 'smooth' });
        });

        btnDerecha.addEventListener('click', () => {
            posicionScroll += 300; // Ajusta este valor según sea necesario
            if (posicionScroll > contenedorCarrusel.scrollWidth - contenedorCarrusel.clientWidth) {
                posicionScroll = contenedorCarrusel.scrollWidth - contenedorCarrusel.clientWidth;
            }
            contenedorCarrusel.scrollTo({ left: posicionScroll, behavior: 'smooth' });
        });
    }

    window.agregarAlCarrito = function(productId) {
        const producto = productos.find(p => p.id === productId);
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        const indiceExistente = carrito.findIndex(p => p.id === productId);
        if (indiceExistente > -1) {
            carrito[indiceExistente].cantidad += 1;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Mostrar alerta de SweetAlert2
        Swal.fire({
            title: 'Producto agregado',
            text: `El producto ${producto.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    document.getElementById('categoryFilter').addEventListener('change', filtrarProductos);
    document.getElementById('priceFilter').addEventListener('change', filtrarProductos);

    cargarProductosDestacados();
    cargarTodosLosProductos();
    inicializarCarrusel();
});
