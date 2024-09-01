const UNSPLASH_KEY = "dWY1oytwX7XTfnn1XAlVZGQOTcxykA9Oxi-Oe8bkqm4"; // Llave de Acceso para la API
const UNSPLASH_URL = "https://api.unsplash.com/search/photos?page=1"; // URL para la petición a la API

const prepareSearch = () => {
	const searchInput = document.querySelector(".search-bar__input");

	searchInput.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			const searchValue = searchInput.value;
			console.log("Searching for:", searchValue);
			searchImagesOfCategory(searchValue).then((data) => {
				clearGallery();
				searchInput.value = "";
				printNewImages(data.results);
			});
		}
	});
};

// Limpiar la galería
const clearGallery = () => {
	const gallery = document.querySelector(".gallery");
	gallery.innerHTML = "";
};

// Petición a la API
const searchImagesOfCategory = async (cat) => {
	const url = `${UNSPLASH_URL}&query=${cat}&client_id=${UNSPLASH_KEY}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

// Obtener los datos de la nueva img
const getImageData = (newImg) => {
	const {
		id,
		alternative_slugs: { es: originalSlug },
		urls: { full: imgUrl },
	} = newImg;
	const slug = originalSlug.split(id).join("-").split("-").join(" "); //Formatear el slug para que sea el alt de la img

	return { imgUrl, slug }; // Retorna los valores de la nueva img
};

// Pintar las nuevas imágenes en el HTML
const printNewImages = (imagesList) => {
	const gallery = document.querySelector(".gallery");

	imagesList.forEach((newImg) => {
		const { imgUrl, slug } = getImageData(newImg);
		const newItem = document.createElement("div");
		newItem.classList.add("gallery__item");
		newItem.innerHTML = `
		<img
			class="gallery__image"
			src="${imgUrl}"
			alt="${slug}"
		/>
		<div class="gallery__overlay">
			<button class="gallery__overlay-button">Guardar</button>
		</div>
		`;

		gallery.appendChild(newItem);
	});
};

(startApp = () => {
	console.log("Starting App...");
	prepareSearch();
})();
