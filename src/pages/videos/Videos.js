import Hero from '../../componentes/hero/Hero'
import ContentDataApiQuery from '../../componentes/lastedContent/ContentDataApiQuery'
import './Videos.css'

export default function Videos() {
  return (
    <>
    <Hero />
    <ContentDataApiQuery type={'videos'} query={'popular'}/>
    </>

  )
}
