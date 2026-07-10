import Offerings from "../common/Offerings";
import { getstartdata } from "../../assets/header/OfferData";

const GetStart = () => {
  return (
    <>
      <div>
        <Offerings data={getstartdata} />
      </div>
    </>
  );
};

export default GetStart;
