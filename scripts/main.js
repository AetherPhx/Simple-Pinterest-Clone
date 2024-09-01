const UNSPLASH_KEY = "dWY1oytwX7XTfnn1XAlVZGQOTcxykA9Oxi-Oe8bkqm4"; // Llave de Acceso para la API
const UNSPLASH_URL = "https://api.unsplash.com/search/photos?page=1"; // URL para la petición a la API

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

// Pintar las imágenes en el HTML
const printNewImages = (imagesList) => {
	const board = document.querySelector(".board");

	imagesList.forEach((newImg) => {
		const { imgUrl, slug } = getImageData(newImg);
		const img = document.createElement("img");
		img.src = imgUrl;
		img.alt = slug;
		board.appendChild(img);
	});
};

(startApp = () => {
	console.log("Starting App...");

	// ! Uncomment when Interface is ready
	// searchImagesOfCategory("Messi").then((data) => printNewImages(data.results));
})();
