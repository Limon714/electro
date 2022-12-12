import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = ()=> {
    const result = useSelector((state)=>state.cartData);
    console.warn("Redux data in Header", result);
    return(
        <div className="header">
            <div className="cart-div">
             <span className="nmb">{result.length}</span>
             <br />
             <FaCartPlus  className="cartadd"/>
            </div>
        </div>
    )
}

export default Header;