import { getstartdata } from "../../../assets/header/OfferData";
import Offerings from "../common/Offerings";
const GetStart = () => {
  return (
    <>
      <div>
         <Offerings data={getstartdata}/>
        
      </div>
    </>
  );
};

export default GetStart;
