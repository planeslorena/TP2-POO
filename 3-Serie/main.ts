import { Serie } from "./serie";

//Se crean dos series y se prueban las diferentes funciones de las mismas.
let lost = new Serie('Lost', 2004, 6, [25, 24, 23, 14, 17, 18]);

lost.consultarSerie();
lost.episodiosxVer();
lost.verEpisodio();
lost.verEpisodio();
lost.verEpisodio();
lost.episodiosxVer();
lost.serieVista();

let bb = new Serie('Breaking Bad', 2008, 2, [2, 1]);

bb.consultarSerie();
bb.episodiosxVer();
bb.verEpisodio();
bb.verEpisodio();
bb.verEpisodio();
bb.episodiosxVer();
bb.serieVista();