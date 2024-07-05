# Progress Bar JS

[![npm version](https://img.shields.io/npm/v/progress-bar-js.svg?style=flat-square)](https://www.npmjs.com/package/progress-bar-js)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/progress-bar-js)
[![npm](https://img.shields.io/npm/dt/progress-bar-js.svg)](https://www.npmjs.com/package/progress-bar-js)

Progress Bar JS es un paquete versátil, que te permite mostrar una barra de progreso elegante y altamente personalizable para tus aplicaciones web. Añade un toque de profesionalismo y dinamismo a tu sitio con una implementación sencilla y opciones de personalización flexibles. Ideal para cualquier proyecto que necesite mostrar el progreso de una forma atractiva y eficaz.

## Resultado Final

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/Loading-Request-formulario.gif)

## Instalación

    $ npm install progress-bar-js --save
    $ yarn add progress-bar-js

## Caracteristicas

- Fácil implementación: Agrega indicadores de progreso con solo unas líneas de código.
- Compatible con varios frameworks: Funciona sin problemas en React, Vue, Angular, y Svelte.
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
import { ProgressBarJSContainer } from "progress-bar-js";
import "progress-bar-js/dist/style.css";

function App() {
  const cargarBarra = () => {
    ProgressBarJSContainer([]);
  };

  return <button onClick={cargarBarra}>Mostrar Barra</button>;
}

export default App;
```

## Ejemplo Práctico en Next.js

```jsx
"use client";
import { useState } from "react";
import { getSimpson } from "../actions/getSimpson";
import Image from "next/image";

import { showLoading, hideLoading } from "loading-request";
import "loading-request/dist/index.css";

export default function ApiSimpson() {
  const [data, setData] = useState(null);

  const handleGetSimpson = async () => {
    showLoading({ message: "Cargando API..." });
    try {
      const data = await getSimpson();
      setData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      hideLoading();
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

#### ProgressBarJSContainer(options: string[]);

Esta función crea y muestra una barra de progreso con opciones personalizables. Por defecto, la barra de progreso se muestra en la parte superior de la página y se oculta automáticamente cuando se completa la carga.

- **Parámetros**:

  - Recibe un array opcional de strings que contiene los colores para personalizar la barra de progreso y su fondo. El primer valor del array corresponde al backgroundColor y el segundo al barColor. Por ejemplo: ['#f11946', '#0572ce'].

- **Opciones**:
  - backgroundColor: Color de fondo de la barra de progreso. Por defecto, es semitransparente con un opacidad de 0.2. Si se proporciona, se aplica dinámicamente.
  - barColor: Color de la barra de progreso. Por defecto es #0572ce. Si se proporciona, se aplica dinámicamente.

Esta función es útil para implementar indicadores de carga visualmente atractivos y personalizables en aplicaciones web.

### Contribuir

Si encuentras algún problema o tienes una idea para mejorar el paquete, por favor abre un issue o envía un pull request en GitHub: https://github.com/urian121/progress-bar-js

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

[![GitHub](https://img.shields.io/badge/GitHub-urian121/loading--request-181717?logo=github&style=flat-square)](https://github.com/urian121/loading-request)

## Agradecimientos

¡Gracias a todos los Devs 👨‍💻 que han utilizado y contribuido al desarrollo de **Progress Bar JS**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.
