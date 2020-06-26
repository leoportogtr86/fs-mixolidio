import React, { useState } from "react";
import Fret from "./Fret";
import Backing from "./Backing";
import axios from "axios";
import Titulo from "./Titulo";
import Jam from "../jam";

export default (props) => {
  console.log(Jam);

  //estado das urls de video e braço da guitarra

  const [srcFret, setSrcFret] = useState("https://fretmap.app/");
  const [backingFret, setBackingFret] = useState(
    "https://www.youtube.com/embed/4q7h2SwIyLg"
  );

  //estado dos títulos

  const [titulo, setTitulo] = useState("C Jônio");

  //estado do valor dos inputs

  const [valorTonalidade, setValorTonalidade] = useState("");
  const [valorModo, setValorModo] = useState("");

  //aqui os estados que irão influenciar na url para a chamada ajax com axios
  const [tonica, setTonica] = useState("gb");
  const [modo, setModo] = useState("mixolidio");

  const [tonalidadeControle, setTonalidadeControle] = useState("Tonalidade");
  const [modoControle, setModoControle] = useState("Modo");

  //url da chamada ajax

  const [url, setUrl] = useState(
    "https://jam-track.herokuapp.com/" + tonica + "-" + modo
  );

  axios.get(url).then((res) => {
    setSrcFret(res.data.src_fret);
    setBackingFret(res.data.src_backing);
    setTitulo(res.data.titulo);
  });

  return (
    <div>
      <h1 className="text-primary text-center">Jam Track</h1>

      <Titulo titulo="F# Mixolídio" />
      <Fret src={srcFret} />
      <Backing src={backingFret} />
    </div>
  );
};
