import { Parallax } from "react-parallax";
import Villa1 from "../images/villa1.jpg";
import "./VillaImageOne.css"

const VillaImageOne = () => (
  <Parallax className="paraImage" bgImage={Villa1} strength={500} blur={5}>
    <div className="villaContent">
      <span className="imgVillaText">A trip to our villa</span>
    </div>
  </Parallax>
);

export default VillaImageOne;
