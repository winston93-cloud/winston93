# Mi Proyecto Web

Un proyecto web moderno construido con **Next.js 12**, **TypeScript** y **Tailwind CSS**.

## 🚀 Características

- ⚡ **Next.js 12** con Pages Router
- 🔷 **TypeScript** para tipado estático
- 🎨 **Tailwind CSS** para estilos utility-first
- 📱 **Responsive Design** incluido
- 🌙 **Soporte para tema oscuro**
- 🔧 **ESLint** configurado
- 🧶 **Yarn** como gestor de paquetes

## 📋 Requisitos previos

- Node.js 16.8.0 o superior
- Yarn (recomendado) o npm

## 🛠️ Instalación y Uso

### ✅ **El proyecto ya está configurado y listo para usar:**

1. **Asegúrate de que Node.js esté en el PATH:**
   ```bash
   export PATH="/home/sistemam/nodejs/bin:$PATH"
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   yarn dev
   ```

3. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador.**

### 🔧 **Si necesitas reinstalar dependencias:**
```bash
export PATH="/home/sistemam/nodejs/bin:$PATH"
yarn install
```

## 📦 Scripts disponibles

- `yarn dev` - Inicia el servidor de desarrollo
- `yarn build` - Construye la aplicación para producción
- `yarn start` - Inicia el servidor de producción
- `yarn lint` - Ejecuta ESLint

## 📁 Estructura del proyecto

```
mi-proyecto-web/
├── src/
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Personalización

- **Estilos**: Modifica `src/styles/globals.css` y usa las clases de Tailwind CSS
- **Componentes**: Crea nuevos componentes en `src/components/`
- **Páginas**: Agrega nuevas páginas en `src/pages/`

## ⚙️ Configuración Específica

Este proyecto está configurado para funcionar con:
- **Node.js 16.8.0** (instalado en `/home/sistemam/nodejs/`)
- **Yarn 1.22.22** como gestor de paquetes
- **Next.js 12** (compatible con Node.js 16.8.0)
- **TypeScript 4.9** (compatible con la configuración actual)

## 🌐 Estado del Servidor

✅ **Servidor funcionando correctamente en http://localhost:3000**

## 📚 Recursos

- [Documentación de Next.js 12](https://nextjs.org/docs/getting-started)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

¡Feliz codificación! 🎉 