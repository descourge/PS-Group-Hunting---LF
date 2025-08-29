# Prueba Técnica: Módulo de Gestión de Productos (Luis Faúndez)

Esta es mi solución para la prueba técnica de Desarrollador Frontend. Es una pequeña app en Angular para gestionar productos, permitiendo listar, agregar y eliminar productos.

Para demostrar el flujo de datos completo, me tomé la libertad de hacer que **el formulario y todos los botones fueran 100% funcionales**, conectando la interfaz con la API simulada.

## Cómo Ejecutar el Proyecto

1.  **Clonar:** `git clone https://github.com/descourge/PS-Group-Hunting---LF`
2.  **Instalar:** `npm install`
3.  **Iniciar API:** (En una terminal) `json-server --watch db.json`
4.  **Iniciar App:** (En otra terminal) `ng serve`

La aplicación se abrirá en `http://localhost:4200`.

---

## Checklist de Requisitos

* [x] **Componentes Angular:** Se creó el componente principal `ProductDashboard` para manejar la vista y la lógica de los productos.
* [x] **Tabla Funcional:** La tabla muestra `nombre`, `precio` y `stock`. El botón "Eliminar" es funcional.
* [x] **Modal Funcional:** El botón "Agregar producto" abre un modal. **Decidí implementar la funcionalidad completa del formulario** para mostrar el ciclo POST de datos.
* [x] **API Simulada:** Se usó `json-server` y `HttpClient` para las peticiones (`get`, `post`, `delete`), todo encapsulado en `ProductService`.
* [x] **Diseño y Estilos:** El diseño es responsivo usando Bootstrap (Flexbox) y CSS Grid. Todos los estilos se manejaron con SCSS y variables para crear un tema coherente.

---

## Extras Implementados

Además de lo requerido, se completaron todos los puntos opcionales:

* [x] **RxJS (Observables):** El flujo de datos es completamente reactivo, usando Observables y el pipe `async`.
* [x] **NgBootstrap:** Utilizado para el modal.
* [x] **Validación de Formulario:** El formulario de "Agregar" valida los campos `nombre`, `precio` y `stock`.

Comentarios adicionales: Había optado por utilizar TailwindCSS para este desarrollo, pero tuve problemas técnicos debido a que las versiones más modernas ya no son compatibles con SCSS. También agregué unos pequeños íconos que se generan utilizando la API de Dicebear.

También añadí otras mejoras de UX como animaciones, notificaciones de éxito y un layout profesional con un tema de color basado en la página web de PS Grupo Hunting.