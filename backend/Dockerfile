# Usamos la imagen oficial de Node.js como base
FROM node:14

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalamos las dependencias de la aplicación
RUN npm install

# Copiamos el resto del código de la aplicación
COPY . .

# Exponemos el puerto 3000, que es el que usa nuestra aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
