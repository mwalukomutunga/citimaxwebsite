import ActionBox from "../components/ActionBox";
import Help from "../components/Help";
import PTX from "../components/Ptx";
import Slider from "../components/Slider";
import Strategy from "../components/Strategy";

export default function Home() {
  return (
    <>
      <Slider />
      <PTX />
      <ActionBox />
      <Help />
      <Strategy />
    </>
  );
}
