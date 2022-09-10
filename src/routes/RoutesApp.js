import { Routes, Route } from "react-router-dom";

import Fotos from "../pages/fotos/Fotos";
import Videos from '../pages/videos/Videos'
import LayOut from "../theme/LayOut";

export default function RoutesApp() {
  return (
    <>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Fotos />} />
          <Route path='/videos' element={<Videos />} />
        </Route>
      </Routes>
    </>
  );
}
