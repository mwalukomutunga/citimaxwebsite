import About from "../components/About";
import ActionBox from "../components/ActionBox";
import Help from "../components/Help";
import PTX from "../components/Ptx";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Strategy from "../components/Strategy";

export default function Home() {
  return (
    <>
      <Slider />
      <About/>
      <ActionBox />
      <PTX />      
      <ActionBox />
      <Help />
      <Services/>
      {/* <ActionBox /> */}
      <Strategy />
      
    </>
  );
}
