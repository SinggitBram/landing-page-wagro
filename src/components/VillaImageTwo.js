import { Parallax } from "react-parallax";
import Villa2 from "../images/villa2.jpg";
import "./VillaImageOne.css"

const VillaImageTwo = () => (
  <Parallax className="paraImage" bgImage={Villa2} strength={500} blur={0}>
    <div className="villaContent">
      <span className="imgVillaText">A trip to our villa</span>
    </div>
  </Parallax>
);

export default VillaImageTwo;
