# AbstractFactory.
  

# Game Demo
Este proyecto representa un ejemplo de implementacion del patrón de diseño "Abstract Factory" con "javascript Vanilla". 
El programa llama a fabricas e instancia enemigos de diferentes niveles de poder **(El poder dependera de la fabrica).** Posteriormente el programa hace que interactuen a través de metodos previamente definidos en las clases. 

Finalmente muestra un historial de los enemigos "derrotados" en la duracion del programa.

### Clases
**FabricaEnemigosNivel1:** Es una clase que implementa la interfaz "FabricaEnemigos". Representa una fabrica de enemigos de nivel 2, es llamada cuando se quiere instanciar un enemigo en el programa.

#### EnemigosNivel1: Es una clase que implementa de una interfaz "Enemigos.js" Sirve para crear objetos de tipo: Gomba. Este enemigo tiene las siguientes caracteristicas o atributos:
 * **nivelTotalVida:** Representa la vida por defecto del enemigo "100%".
 * **nombre:** Es el nombre del enemigo.
 * **nivelVida:** Es la vida restante o total del enemigo a lo largo del juego.
 * **nivel:** Es el nivel del juego al que pertecene el enemigo.
 * **dano:** Es el daño que causa el enemigo al atacar.
 * **PerteneceA:** Es una relacion entre el enemigo y un historial del Juegador.
 * **estaVivo:** Representa si actualmente esta vivo el enemigo en el juego.

### Metodos
* **atacar(): number** Este metodo sirve para atacar y restar nivel de vida.
*  **recibirDano(): void** Este metodo resta vida al enemigo.
*  **morir(): void** Este metodo sirve para cambiar el estado del enemigo y determinar que fue eliminado.

## Prueba en vivo de la aplicacion:
* **Desde la pagina replit.com**
[proyecto - abstractFactoryGameDemo](https://replit.com/@DanielValdez2/abstracFactoryGameDemo#index.js)


## Diagrama de clases
![image](https://user-images.githubusercontent.com/51674961/128126451-44759aab-ed5a-4e73-adb3-d854cd31e018.png)


## Comenzando 🚀

Para probar el proyecto y realizar pruebas en local puede descargalo desde los siguientes ligas:
* **Con el protocolo seguro ssh:**
```
git@github.com:DanielVT45/abstractFactory.git
```
* **Con el protocolo seguro https:**
```
https://github.com/DanielVT45/abstractFactory.git
```
### Pre-requisitos 📋

Es necesario tener instalado en la computadora los siguientes programas:
* **nodejs 14.0.0 o superior** [nodejs](https://nodejs.org/)
* **npm 7.19.0 ** [nodejs](https://nodejs.org/)


### Descargas de la aplicacion

Descargarlo con el protocolo seguro: https.
```
https://github.com/DanielVT45/abstractFactory.git
```

Descargarlo con protocolo seguro ssh.
```
git@github.com:DanielVT45/abstractFactory.git
```

### Instalación 🔧
Para instalar esta aplicacion es necesario descargar una copia de proyecto en local o en un servidor.
 
Descarga del programa con https
```
git clone https://github.com/DanielVT45/abstractFactory.git
```

Verificar que se haya descargado la carpeta del proyecto con el comando:

```
ls asbtractFactory
```

Acceder a la carpeta del proyecto. Descargar las dependencias y finalmente correr la aplicacion con los comandos:

```
cd abstractFactory
npm install
node index.js
```

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

Para este proyecto se utilizaron las suguientes herramientas de desarrollo:

* [nodejs version - 14.17.1](https://nodejs.org/es/) - El entorno de ejecucion de javascript (pagina oficial).
* [npm version - 7.19.0](https://www.npmjs.com/) - Manejador de dependencias para la aplicacion (pagina oficial).

## Autores ✒️
Responsable del proyecto de diseño y de la creacion del 
* **Daniel Valdez** - *Trabajo Inicial* - [DanielVT45](https://github.com/DanielVT45)
* **Daniel Valdez** - *Documentación* - [DanielVT45](https://github.com/DanielVT45)

También puedes mirar la lista de todos los [contribuyentes](https://github.com) quíenes han participado en este proyecto. 


---
⌨️ con ❤️ por [DanielVT45](https://github.com/DanielVT45) 😊


