import "./Fotos.css";
import Hero from "../../componentes/hero/Hero";
import ContentDataApiQuery from "../../componentes/lastedContent/ContentDataApiQuery";
import useGetData from "../../hooks/getData/useGetData";

export default function Fotos() {
  return (
    <>
      <Hero />
      <ContentDataApiQuery type={"photos"} query={"curated"} />
    </>
  );
}
