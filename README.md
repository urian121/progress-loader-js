# Progress Loader JS

[![npm version](https://img.shields.io/npm/v/progress-loader-js.svg?style=flat-square)](https://www.npmjs.com/package/progress-loader-js)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/progress-loader-js)
[![npm](https://img.shields.io/npm/dt/progress-loader-js.svg)](https://www.npmjs.com/package/progress-loader-js)

**Progress Loader** JS es un paquete versátil que permite mostrar una barra de progreso elegante y altamente personalizable en tus aplicaciones web. Con una implementación sencilla y opciones de personalización flexibles, añade un toque de profesionalismo y dinamismo a tu sitio. Ideal para cualquier proyecto que necesite mostrar el progreso de manera atractiva y eficaz.

## Casos de uso:

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/demo-progress-loader-js.gif)

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/progress-loader-js.gif)

## Instalación

    $ npm install progress-loader-js --save
    $ yarn add progress-loader-js

## Caracteristicas

- Fácil implementación: Agrega indicadores de progreso con solo unas líneas de código.
- Compatible con varios frameworks: Funciona sin problemas en React, Vue, Angular, Next, Svelte y más.
- Personalización flexible: Ajusta colores del spinner y texto de carga según tus necesidades.
- Instalación rápida: Se integra fácilmente via npm o yarn en minutos.
- Soporte para operaciones asíncronas: Ideal para carga de datos y navegación entre páginas.
- Animaciones suaves: Mejora la experiencia de usuario con animaciones CSS.
- Eficiencia y rendimiento: Diseñado para impactar mínimamente el rendimiento de la aplicación.
- Documentación completa: Incluye ejemplos prácticos y guías detalladas.
- Mantenimiento activo: Actualizaciones frecuentes y mejoras continuas.
- Licencia abierta: Publicado bajo licencia ISC, apto para uso comercial y personal.

## Ejemplo Práctico utilizando React.js

```jsx
import { ProgressLoaderContainer } from "progress-loader-js";
import "progress-loader-js/dist/style.css";

function App() {
  const ActivarBarra = () => {
    ProgressLoaderContainer({
      backgroundColor: "#ccc",
      barColor: "#1fb141",
    });
  };

  return (
    <>
      <h1>Progress Loader JS</h1>
      <button onClick={ActivarBarra}>Activar Barra</button>
    </>
  );
}

export default App;
```

## Ejemplo Práctico utilizando Next.js, navegación entre paginas

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/navegacion-entre-paginas-con-progress-loader-js.gif)

```jsx
"use client";
import { ProgressLoaderContainer } from "progress-loader-js";
import "progress-loader-js/dist/style.css";

export default function Contacto() {
  ProgressLoaderContainer({
    backgroundColor: "#ccc",
    barColor: "#1fb141",
  });
  return (
    <div>
      <h1>Página de Contacto 😯</h1>
    </div>
  );
}
```

👉 [Código](https://github.com/urian121/app-nextjs-con-progress-loader-js)

## API

#### ProgressLoaderContainer(options: ProgressLoaderOptions);

Esta función crea y muestra una barra de progreso con opciones personalizables. Por defecto, la barra de progreso se muestra en la parte superior de la página y se oculta automáticamente cuando se completa la carga.

- **Parámetros**:

  - Recibe un objeto opcional de tipo ProgressLoaderOptions que contiene las opciones para personalizar la barra de progreso y su fondo. El objeto puede incluir las siguientes propiedades:
    - **backgroundColor**: Color de fondo de la barra de progreso. Por defecto es **#ccc**. Si se proporciona, se aplica dinámicamente.
    - **barColor**: Color de la barra de progreso. Por defecto es **#f11946**. Si se proporciona, se aplica dinámicamente.

- **Opciones**
  - **backgroundColor**: Color de fondo de la barra de progreso.
  - **barColor**: Color de la barra de progreso.

Esta función es útil para implementar indicadores de carga visualmente atractivos y personalizables en aplicaciones web.

Como se mencionó antes, ProgressLoaderContainer recibe de forma opcional un objeto con los colores para personalizar la barra de progreso y su fondo. Por defecto, la barra posee como color backgroundColor: #ccc y barColor: **#f11946**.

### Contribuir

Si encuentras algún problema o tienes una idea para mejorar el paquete, por favor abre un issue o envía un pull request en GitHub: https://github.com/urian121/progress-loader-js

## Desarrollado por

- [Urian Viera](https://github.com/urian123)
- [Mi portafolio](https://www.urianviera.com)
- [Canal de Youtube](https://www.youtube.com/WebDeveloperUrianViera)
- [¡Donar a través de PayPal!](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)
- [Email](mailto:urian1213viera@gmail.com)

## Copyright

© 2024 Urian Viera. Todos los derechos reservados.

## License

Licensed under ISC

[![GitHub](https://img.shields.io/badge/GitHub-urian121progress-loader-js-181717?logo=github&style=flat-square)](https://github.com/urian121/progress-loader-js)

## Agradecimientos

¡Gracias a todos los **Devs** 👨‍💻 que han utilizado y contribuido al desarrollo de **Progress Loader JS**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.
