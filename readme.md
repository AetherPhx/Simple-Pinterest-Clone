# Desafío Semana 13 IDAT Bootcamp: Pinterest Clone with Unsplash API

## Descripción

Este proyecto es parte de los desafíos realizados en los días de Hackaton dentro del `bootcamp de IDAT` con la finalidad de poner en práctica los conocimientos adquiridos durante la semana.

Se tiene como objetivo desarrollar un **clon de la página principal de `Pinterest`**.
Esta app web debe contar con una **interfaz simple** y la **implementación de la API de `Unsplash`** mediante las cuales se muestren imágenes de la categoria que desee buscar el usuario.

## Requisitos

- HTML
- CSS
- JavaScript
- Petición a la API de Unsplash

## Plan de Desarrollo

1. **Fase 1**: Configuración del entorno de desarrollo
2. **Fase 2**: Implementación de la lógica para la API de Unsplash
3. **Fase 3**: Maquetación de la interfaz clon de Pinterest
4. **Fase 4**: Integración de lógica y maquetación
5. **Fase 5**: Pruebas y validación
6. **Fase 6**: Mejoras y optimización

### Fase 1: Configuración del entorno de desarrollo

- Iniciar el proyecto mediante Vite y npm.
- Configurar la estructura de carpetas (/styles, /scripts).
- Inicializar Git y conectar el repositorio local con el remoto.
- Crear archivos base: index.html, styles.css, script.js.
- Configurar credenciales para la API de Unsplash (obtener las claves necesarias).

### Fase 2: Implementación de la lógica para la API de Unsplash

- Configurar el archivo main.js para realizar peticiones a la API de Unsplash.
- Escribir funciones que manejen la búsqueda de imágenes por categoría.
- Probar la lógica utilizando console.log() para asegurarse de que los datos se obtienen correctamente antes de integrarlos con el HTML.

### Fase 3: Maquetación de la interfaz clon de Pinterest

#### Estructura (HTML)

- Conseguir e implementar el favicon de pinterest y los íconos de las opciones.
- Estructurar el header de la página dividido entre la barra de navegación, la barra de búsqueda y las opciones de cuenta.
- Preparar la galería de imágenes y las imagenes por defecto.
- Establecer un `overlay on hover` para cada imagen, este oscurecerá la imagen y mostrará una opción para guardar la imagen.

#### Estilos (CSS)

- Ordenar la galería de imágenes al estilo Pinterest.
- Crear las clases para ocultar y mostrar el `overlay on hover` cuando sea necesario y tenga la apariencia deseada.
- Ordenar el header para que esté bien alineado y en fila.
- Agregar estilos de hover.

### Fase 4: Integración de lógica y maquetación

- Reconocer la barra de búsqueda y obtener el valor ingresado en ella.
- Integrar ese valor en la petición a la API de Unsplash.
- Mostrar las imágenes obtenidas con la petición en la página web reemplazando las imágenes actuales.

### Fase 5: Pruebas y validación

- Realizar pruebas manuales de la aplicación con diferentes términos de búsqueda para asegurar que la API responde correctamente.
- Identificar y corregir posibles errores o fallos en la lógica y la interfaz.

### Fase 6: Mejoras y optimización

- Implementar mejoras estéticas y de experiencia de usuario.
- Optimizar el rendimiento.
- Refinar el diseño para mejorar la usabilidad y la accesibilidad.
- Documentar el código para mantener una buena legibilidad y mantenimiento futuro.

## Estado del Proyecto

Actualmente el proyecto se encuentra en la fase #4.
