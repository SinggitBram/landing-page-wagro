import { Parallax } from "react-parallax";
import Villa3 from "../images/villa3.jpg";
import "./VillaImageOne.css";

const VillaImageThree = () => (
  <Parallax className="paraImage" bgImage={Villa3} strength={500} blur={0}>
    <div className="villaContent">
      <span className="imgVillaText">A trip to our villa</span>
    </div>
  </Parallax>
);

export default VillaImageThree;
