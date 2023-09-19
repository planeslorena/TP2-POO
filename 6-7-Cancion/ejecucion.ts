import { Cancion } from "./cancion";
import { Cd } from "./cd";

let cancion1 = new Cancion('Medias Negras', 'Sabina');
let cancion2 = new Cancion('No necesito nada', 'No te va a gustar');
let cancion3 = new Cancion('Vas a bailar', 'Ciro y los persas');
let cancion4 = new Cancion('Llenos de magia', 'La vela puerca');
let cancion5 = new Cancion('A la orilla de la chimenea', 'Sabina');
let cancion6 = new Cancion('Tratame suavemente', 'Sosa Stereo');
let cancion7 = new Cancion('Persiana americana', 'Sosa Stereo');

let CD = new Cd;

CD.agregarCancion(cancion1);
CD.agregarCancion(cancion2);
CD.agregarCancion(cancion3);
CD.agregarCancion(cancion4);
CD.agregarCancion(cancion5);
CD.agregarCancion(cancion6);
CD.agregarCancion(cancion7);
console.log('');
CD.listarCD();
console.log('');
console.log(`El cd tiene ${CD.contarCanciones()} canciones`);
console.log('');
CD.eliminarCancion(3);
console.log('');
let cancion8 = new Cancion('Verte reir', 'No te va a gustar');
CD.grabarCancion(10, cancion8);
CD.grabarCancion(4, cancion8);
console.log('');
CD.listarCD();


