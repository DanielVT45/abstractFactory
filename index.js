/** @interface */
class FabricaEnemigos {
	crearEnemigo() {
		throw Error("Inteface");
	}
}

/** @interface */
class Enemigos {
	atacar() {
		throw Error("interface");
	}

	recibirDano() {
		throw Error("interface");
	}

	morir() {
		throw Error("interface");
	}
}

/** @implements {FabricaEnemigos}*/
class FabricaEnemigosNivel1 {
	/**
	 * Representa una fabrica de enemigos Nivel 1.
	 * @constructor
	 * @param {void}
	 * @return {void}
	 * @override*/
	crearEnemigo() {
		return new EnemigosNivel1();
	}
}

/** @implements {FabricaEnemigos}*/
class FabricaEnemigosNivel2 {
	/**
   * Representa una fabrica de enemigos Nivel 2.
   * @constructor
   * @param {void}
   * @return {void}
   * @override*/
	crearEnemigo() {
		return new EnemigosNivel2();
	}
}

/** @implements {enemigos} */
class EnemigosNivel1 {
	/**
	 * Representa a un enemigo del juego.
	 * @constructor
	 * @param {void}
	 * */
	constructor() {
		this.nivelTotalVida = 100;
		this.nombre = "Gomba";
		this.nivelVida = 100;
		this.nivel = 1;
		this.dano = 10;
		this.perteneceA = null;
		this.estaVivo = true;
	}

	/** Funcion para infringe dano al oponente del enemigo.
	 * @param {void}
	 * @return {number} this.dano
	 * @override*/
	atacar() {
		console.log(
			`El enemigo \"${this.nombre}\" ataco!, (menos - ${this.dano} puntos de vida al protagonista)`
		);
		return this.dano;
	}

	/** Es el dano que ha recibido el enemigo de su opente o del escenario.
	 * @param {number} danoRecibido
	 * @return {void}
	 * @override*/
	recibirDano(danoRecibido) {
		console.log(
			`El enemigo \"${this.nombre}\" recibio dano!, menos - ${danoRecibido} puntos de vida, total: ${this.nivelVida}`
		);

		if (!this.estaVivo) {
			console.log("Error el enemigo ya ha sido eliminado");
		} else {
			if (this.nivelVida <= 0) {
				return this.morir();
			}

			this.nivelVida -= danoRecibido;
		}
	}

	/** Funcion para eliminar al enemigo del juego (quita de la memoria al objecto)".
	 * @param {void}
	 * @return {void}
	 * @override*/
	morir() {
		console.log(`El enemigo \"${this.nombre}\", ha sido derrotado!`);
		this.estaVivo = false;
		//delete this;
	}
}
/** @implements {enemigos} */
class EnemigosNivel2 {
	/**
	 * Representa a un enemigo del juego.
	 * @constructor
	 * @param {void}
	 * */
	constructor() {
		this.nivelTotalVida = 100;
		this.nombre = "Koopa";
		this.nivelVida = 100;
		this.nivel = 2;
		this.dano = 20;
		this.perteneceA = null;
		this.estaVivo = true;
	}

	/** Funcion para infringe dano al oponente del enemigo.
	 * @param {void}
	 * @return {number} this.dano
	 * @override*/
	atacar() {
		console.log(`El enemigo \"${this.nombre}\" ataco!. (Menos - ${this.dano} puntos de vida al protagonista)`);
		return this.dano;
	}

	/** Es el dano que ha recibido el enemigo de su opente o del escenario.
	 * @param {number} danoRecibido
	 * @return {void}
	 * @override*/
	recibirDano(danoRecibido) {
		console.log(`El enemigo \"${this.nombre}\" recibio dano!. (Menos - ${danoRecibido} puntos de vida, total: ${this.nivelVida})`);

		if (!this.estaVivo) {
			console.log("Error el enemigo ya ha sido eliminado");
		} else {
			if (this.nivelVida <= 0) {
				return this.morir();
			}

			this.nivelVida -= danoRecibido;
		}
	}

	/** Funcion para eliminar al enemigo del juego (quita de la memoria al objecto)".
	 * @param {void}
	 * @return {void}
	 * @override*/
	morir() {
		console.log(`El enemigo \"${this.nombre}\" ha sido derrotado!`);
		this.estaVivo = false;
		//delete this;
	}
}

/** @param {FabricaEnemigos} fabrica*/
function crearEnemigo(fabrica) {
	return fabrica.crearEnemigo();
}

/**
 * Punto de arranque de la aplicacion.
 * @param {void}*/
function start() {
	console.log("----------------------------------------------------------------");
	console.log("\tGenerando enemigos del juego... procesando...");
	console.log("----------------------------------------------------------------");

	console.log("Llamando a la fabrica de enemigos Nivel 1 y creando un enemigo Nivel 1.");
	console.log("Llamando a la fabrica de enemigos Nivel 2 y creando un enemigo Nivel 2.\n");

	let enemigo = crearEnemigo(new FabricaEnemigosNivel1());
	let enemigo2 = crearEnemigo(new FabricaEnemigosNivel2());
	console.log("----------------------------------------------------------------");
	console.log("\tInteraccion de los enemigos en el juego.");
	console.log("----------------------------------------------------------------");
	console.log(`El enemigo \"${enemigo.nombre}\" esta interactuando en el juego...\n`);
	enemigo.atacar();
	enemigo.recibirDano(20);
	enemigo.recibirDano(30);
	enemigo.recibirDano(30);
	enemigo.recibirDano(20);
	enemigo.recibirDano(20);
	console.log("\n")
                                                                                     
  console.log(`El enemigo \"${enemigo2.nombre}\" esta interactuando en el juego...\n`);
  enemigo2.atacar();
  enemigo2.recibirDano(20);
  enemigo2.recibirDano(30);
  enemigo2.recibirDano(30);
  enemigo2.recibirDano(20);
  enemigo2.recibirDano(20);

	console.log("\n----------------------------------------------------------------");
	console.log("\t\tHistorial del jugador.");
	console.log("----------------------------------------------------------------");
	console.log("\nDatos de los enemigos derrotados:");
	console.log(enemigo);
	console.log(enemigo2);
	console.log("\n");
}

start();
