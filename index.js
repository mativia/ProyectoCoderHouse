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
let todos_los_productos = [];

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
	
	
	
	/* const guardar = (clave, valor) => {
		localStorage.setItem(clave,valor);

	}
	allProducts.forEach(item => {
		guardar(item.title, JSON.stringify(item))
	}) */
	
	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

/* let producto = localStorage.getItem('producto');
let pro = JSON.parse(producto);
console.log(pro[0]); */
//Storage 
/* console.log(localStorage);
localStorage.setItem("product","01") */

/* let producto = localStorage.getItem("product */
 // recorrer local storage

/*  for (let i = 0; i < localStorage; i++){
	let clave = localStorage.key(i);

	console.log("clave", clave);
	console.log("valor", localStorage.getItem(clave));
 }
 */
/* //BUSCADOR

todos_los_productos = ["zapatos nike", "audifonos","reloj","smartwatch", "perfume"]
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.target.matches("#buscador")
        item_a_buscar = event.target.value;
        
        if(todos_los_productos.includes(item_a_buscar)){
            msj = "el producto existe!"
        }
        else { 
            msj = "el producto no existe!"
            
        }
        alert(msj)
    }
   
})  */