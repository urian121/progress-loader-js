# Progress Loader JS

[![npm version](https://img.shields.io/npm/v/progress-loader-js.svg?style=flat-square)](https://www.npmjs.com/package/progress-loader-js)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/progress-loader-js)
[![npm](https://img.shields.io/npm/dt/progress-loader-js.svg)](https://www.npmjs.com/package/progress-loader-js)

Progress Loader JS es un paquete versátil, que te permite mostrar una barra de progreso elegante y altamente personalizable para tus aplicaciones web. Añade un toque de profesionalismo y dinamismo a tu sitio con una implementación sencilla y opciones de personalización flexibles. Ideal para cualquier proyecto que necesite mostrar el progreso de una forma atractiva y eficaz.

## Resultado Final

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/Loading-Request-formulario.gif)

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

## Ejemplo Práctico en React.js

```jsx
import { ProgressLoaderContainer } from "progress-loader-js";
import "progress-loader-js/dist/style.css";

const App = () => {
  // Función para mostrar la barra de progreso
  const mostrarBarraDeProgreso = () => {
    ProgressLoaderContainer(["#f0f0f0", "#3498db"]); // Ejemplo de colores como opciones
  };

  return (
    <div>
      <button onClick={mostrarBarraDeProgreso}>Mostrar Barra de Progreso</button>
    </div>
  );
};

export default App;
```

## Ejemplo Práctico en Next.js

```jsx
"use client";
import { useState } from "react";
import { getSimpson } from "../actions/getSimpson";
import Image from "next/image";

import { ProgressLoaderContainer } from "progress-loader-js";
import "progress-loader-js/dist/style.css";

export default function ApiSimpson() {
  ProgressLoaderContainer(["#f0f0f0", "#3498db"]);
  const [data, setData] = useState(null);

  const handleGetSimpson = async () => {
    showLoading({ message: "Cargando API..." });
    try {
      const data = await getSimpson();
      setData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <>
      <button className="my-4" onClick={handleGetSimpson}>
        Obtener personajes
      </button>

      {data && (
        <div className="cards">
          {data.map((personaje, index) => (
            <div key={index} className="card">
              <div>{personaje.character}</div>
              <Image width={200} height={200} src={personaje.image} alt={personaje.character} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
```

## Resultado en Next.js consumiendo una API REST

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/loading-request-con-nextjs.gif)

👉 [Código](https://github.com/urian121/loading-request-con-nextjs)

## API

#### ProgressLoaderContainer(options: string[]);

Esta función crea y muestra una barra de progreso con opciones personalizables. Por defecto, la barra de progreso se muestra en la parte superior de la página y se oculta automáticamente cuando se completa la carga.

- **Parámetros**:

  - Recibe un array opcional de strings que contiene los colores para personalizar la barra de progreso y su fondo. El primer valor del array corresponde al backgroundColor y el segundo al barColor. Por ejemplo: ['#f11946', '#0572ce'].

- **Opciones**:
  - backgroundColor: Color de fondo de la barra de progreso. Por defecto, es semitransparente con un opacidad de 0.8. Si se proporciona, se aplica dinámicamente.
  - barColor: Color de la barra de progreso. Por defecto es #0572ce. Si se proporciona, se aplica dinámicamente.

Esta función es útil para implementar indicadores de carga visualmente atractivos y personalizables en aplicaciones web.

Como se menciono antes, ProgressLoaderContainer se recibe de forma opcionar una array de colores para personalizar la barra de progreso y su fondo. Pr defecto la barra posee como color backgroundColor: #b4daf y barColor: #0572c.

```jsx
ProgressLoaderContainer(["#b4daf", "#0572c"]);
```

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

Licensed under MIT

[![GitHub](https://img.shields.io/badge/GitHub-urian121progress-loader-js-181717?logo=github&style=flat-square)](https://github.com/urian121/progress-loader-js)

## Agradecimientos

¡Gracias a todos los Devs 👨‍💻 que han utilizado y contribuido al desarrollo de **Progress Loader JS**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.
