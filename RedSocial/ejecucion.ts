import { Influencer } from "./influencer";
import { Seguidor } from "./seguidor";

let lorena = new Influencer('loliplanes','planeslorena@yahoo.com.ar','hola1234');
let ayelen = new Influencer('ayeporque','ayeporqueres@gmail.com','ajsued7845');

let pato = new Seguidor('patosalias', 'patriciosalias@gmail.com','458796loiuy', ['cocina','decoracion']);
let clara = new Seguidor('clarita','clarita@gmail.com','jduetr58746', ['juguetes','perros']);

lorena.publicarPost('Hola mi nombre es Lorena, sigueme si quieres ver videos de cocina.');
lorena.publicarPost('Receta 1: Pastafrola');

ayelen.publicarPost('Todo lo que queres saber y ver sobre gatos');
ayelen.publicarPost('Foto hermosa de mis gatitos');
ayelen.publicarPost('Como bañar a un gato');

pato.buscarContenidoRelacionado();
pato.comentarPost(lorena, 'Hola Lorena, me encanta lo que publicas.', 1);
pato.darMegusta(lorena,2);
pato.seguirInfluencer(lorena);

ayelen.realizarColaboracion(clara,'Aca estamos con Clara yendo a rescatar un gatito');

lorena.verPosts();

ayelen.verPosts();
