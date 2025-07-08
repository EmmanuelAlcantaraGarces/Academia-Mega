# Esta es la base o el runtime donde mi app se va a ejecutar
FROM node:20.19 

# Establecer el directorio de trabajo dentro de la imagen
WORKDIR /usr/src/app

# Copiar el archivo de definicion de dependencias
COPY package.json ./

# Insatalar las dependecnias
RUN npm install --include=prod

# Copiar aplicacion
COPY . .

# Exponer el puerto del app
EXPOSE 3000

# Comando para iniciar la aplicacion
CMD ["npm", "run", "prod"]