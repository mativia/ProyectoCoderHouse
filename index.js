const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];
allProducts = JSON.parse(localStorage.getItem('carrito')); 


const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}
        
		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);


		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;
	
	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});
	//local storage
	localStorage.setItem('carrito', JSON.stringify(allProducts));
	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

//arreglo de todos los productos

var productoss = [
	{
	  nombre: "Zapatos Nike",
	  descripcion: "Zapatillas deportivas nike ideal para correr",
	  precio: 80.00
	},
	{
	  nombre: "Audifonos",
	  descripcion: "Audifonos de alta calidad, especial apra hacer deportes",
	  precio: 20.00
	},
	{
	  nombre: "Reloj",
	  descripcion: "Reloj Simple blanco",
	  precio: 50.00
	},
	{
		nombre: "Smartwatch",
		descripcion: "Reloj Smart para vincular con tu celular y poder disfrutar de la multimedia mientras realizas actividades deportivas",
		precio: 90.00
	},
	{
		nombre: "Perfume",
		descripcion: "Perfume coco noil channel, para salir y que nadie se resista",
		precio: 50.00
	},
	
  ];

  function buscarProductos(busqueda) {
	var resultados = [];
  
	for (var i = 0; i < productoss.length; i++) {
	  if (productoss[i].nombre.toLowerCase().includes(busqueda.toLowerCase())) {
		resultados.push(productoss[i]);
	  }
	}
  
	return resultados;
  }


  function mostrarResultados() {
	
	var busqueda = document.getElementById("busqueda").value;
	var resultados = buscarProductos(busqueda);
  
	var resultadosHTML = "";
	var item = ""
  
	for (var i = 0; i < resultados.length; i++) {
	  //resultadosHTML += "<p>" + resultados[i].nombre + "</p>";
	  if (resultados[i].nombre == "Zapatos Nike"){
		resultadosHTML = `
				<div class="item" id = "item-1">
					<figure>
						<img
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Zapatos Nike</h2>
						<p class="price">$80</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>`
		item = "item-1"
	  }

	 if (resultados[i].nombre == "Audifonos"){
		resultadosHTML = `
			<div class="item" id = "item-2">
				<figure>
					<img
						src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt="producto"
					/>
				</figure>
				<div class="info-product">
					<h2>Audifonos</h2>
					<p class="price">$20</p>
					<button class="btn-add-cart">Añadir al carrito</button>
				</div>
			</div>`
		item = "item-2"
	  }
	  if (resultados[i].nombre == "Reloj"){
		resultadosHTML = `
			<div class="item" id = "item-3">
				<figure>
					<img
						src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
						alt="producto"
					/>
				</figure>
				<div class="info-product">
					<h2>Reloj</h2>
					<p class="price">$50</p>
					<button class="btn-add-cart">Añadir al carrito</button>
				</div>
			</div>`
		item = "item-3"
	  } 
	  if (resultados[i].nombre == "Smartwatch"){
		resultadosHTML = `
			<div class="item" id = "item-4">
				<figure>
					<img
						src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
						alt="producto"
					/>
				</figure>
				<div class="info-product">
					<h2>Smartwatch</h2>
					<p class="price">$90</p>
					<button class="btn-add-cart">Añadir al carrito</button>
				</div>
			</div>`
		item = "item-4"
	  } 
	  if (resultados[i].nombre == "Perfume"){
		resultadosHTML = `
			<div class="item" id = "item-5">
				<figure>
					<img
						src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
						alt="producto"
					/>
				</figure>
				<div class="info-product">
					<h2>Perfume</h2>
					<p class="price">$50</p>
					<button class="btn-add-cart">Añadir al carrito</button>
				</div>
			</div>`
		item = "item-5"
	  }  
	}

	
  if (item != "") {
	document.getElementById(item).innerHTML = resultadosHTML;
  }
  else {
	document.getElementById("item-1").innerHTML = resultadosHTML;
	document.getElementById("item-2").innerHTML = resultadosHTML;
	document.getElementById("item-3").innerHTML = resultadosHTML;
	document.getElementById("item-4").innerHTML = resultadosHTML;
	document.getElementById("item-5").innerHTML = resultadosHTML;
  }
  }