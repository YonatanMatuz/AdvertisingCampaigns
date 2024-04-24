import "./PageNotFound.css";
import PNFImage from "../../../Assets/Images/404Image.png"

function PageNotFound(): JSX.Element {

    return (

        <div className="PageNotFound">

			<img src={PNFImage}/>

        </div>
    );
}

export default PageNotFound;
