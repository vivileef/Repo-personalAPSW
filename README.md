# Práctica 3 - Servidores 🚀

Bienvenido a la **Práctica 3**. En esta práctica, trabajamos con un proyecto de TypeORM con SQLite para demostrar operaciones CRUD sobre entidades, configurando un pequeño servidor y utilizando seed scripts para poblar la base de datos.

## 📋 Objetivos
- Cambiar la clave primaria de UUID a autoincremental.
- Ampliar la entidad `Especie` con nuevas propiedades: descripción, origen, estado y fecha de creación.
- Actualizar y tipar servicios para manejar correctamente tipos y operaciones.
- Eliminar el stub de usuario si ya no es necesario.
- Ajustar el archivo `src/main.ts` para probar operaciones CRUD y manejo correcto de ids numéricos.
- Compilar y ejecutar el seed para probar la inserción y actualización de datos.

## 🛠 Requisitos y Preparación
- Node.js instalado 🖥️
- TypeScript configurado
- SQLite para manejo de la base de datos
- Comandos útiles:
  - Compilar: `npx tsc --noEmit`
  - Ejecutar seed: `npm run dev`

## 📂 Estructura del Proyecto
```
index.ts
package.json
README.md
tsconfig.json
src/
   ├─ data-source.ts
   ├─ main.ts
   └─ entities/
         ├─ animal.ts
         ├─ refugio.ts
         └─ especie.ts
```

## 🐾 Descripción de las Entidades
### Animal
- Contiene información relevante de cada animal en el refugio.
- Relacionado con `Refugio` y `Especie`.

### Refugio
- Representa los refugios donde se alojan los animales.
- Se utiliza para agrupar y gestionar a los animales.

### Especie
- Ampliada con nuevas propiedades:
  - **descripcion**: Detalle textual sobre la especie.
  - **origen**: Procedencia o lugar de origen.
  - **estado**: Estado actual, puede indicar endémico, en peligro, etc.
  - **fecha_creacion**: Registro de la fecha de creación del registro.
- Se ha implementado un método `findByName` para evitar duplicados.

## 📈 Servicios
Cada entidad cuenta con un servicio específico que implementa operaciones CRUD:
- `AnimalService` devuelve `Promise<Animal>`
- `RefugioService` devuelve `Promise<Refugio>`
- `EspecieService` devuelve `Promise<Especie>` y maneja la validación de duplicados.

## 🔧 Uso y Ejecución
1. Compila el proyecto:
   ```
   npx tsc --noEmit
   ```
2. Ejecuta el seed para poblar la base de datos:
   ```
   npm run dev
   ```
3. Verifica en la consola los logs correspondientes a las operaciones CRUD.

---



