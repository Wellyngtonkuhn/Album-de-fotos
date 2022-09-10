import { Outlet } from "react-router-dom";
import "./LayOut.css";

export default function LayOut() {
  return (
    <section>
      <Outlet />
    </section>
  );
}
