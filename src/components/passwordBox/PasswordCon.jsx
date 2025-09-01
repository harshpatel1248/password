import "./password.css"
import Icon from "../../assets/copyw.png"


function PasswordCon( {passwordData}) {
    return (
        <>
            <div className="container">
                <h2>Generate a secure password</h2>
                <div className="inputBox">
                    <input type="text" readOnly className="input" value={passwordData}  style={{color : "white" , letterSpacing:"2px"}}/>
                    <img src={Icon} alt="Icon" className="icon" />
                </div>
            </div>

            <div className="container">
                <div className="hr"></div>
            </div>
        </>
    );
}

export default PasswordCon;