#En consola: docker build -t test-node . (compila todo estos pasos)

#Imagen base
FROM ubuntu:14.04

#Instalar Nodejs

#Cada RUN es una capa del contenedor (\ salto de linea)
RUN sudo apt-get update \
&& apt-get install -y curl \
&& curl -sL deb.nodesource.com/setup_10.x | bash - \
&& apt-get install -y nodejs \
&& npm install -g @angular/cli \
&& mkdir appWeb \
&& rm -rf /var/lib/apt/lists/*

# Copia el directorio actual en el directorio del contenedor (/app)
COPY . /appWeb

#al inicio te posicionara en este directorio al inicio
WORKDIR /appWeb

#crea la carpeta node_modules
RUN npm install

#cada vez que alguien haga un docker run se ejecutara este comando
ENTRYPOINT [ "ng", "serve","proyecto-staffing", "--host","0.0.0.0" ]

#no es conveniente llevarse el node_modules asi que se crea el .dockerignore




#-------- A P U N T E S --------
#docker inspect test-node:latest
#docker history test-node:latest

#ng serve

#docker run -it --rm test-node /bin/bash (el --rm lo elimina)
#docker run -it --rm -p 4200:4200 test-node /bin/bash (linkear un puerto)
#ng serve --host 0.0.0.0
