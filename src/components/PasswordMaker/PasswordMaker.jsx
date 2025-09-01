import { useCallback, useState, useEffect } from "react"
import "./passwordMake.css"
import PasswordCon from "../passwordBox/PasswordCon";

function PasswordMaker() {

    const [upperCase, setUpperCase] = useState(true);
    const [lowerCase, setlowerCase] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [number, setNumber] = useState(false);
    const [length, setlength] = useState(6);
    const [password, setPassword] = useState('');

    const generatePassword = useCallback(() => {
        let str = '';
        if (upperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowerCase) str += "abcdefghijklmnopqrstuvwxyz";
        if (number) str += "0123456789";
        if (symbol) str += "!@#$%^&*()_+{}[]|:;<>,.?/~`";


        if (!str) {
            alert("⚠️ Please select at least one option!");
            return setPassword('')
        }


        let pass = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * str.length);
            pass += str[randomIndex];
        }
        setPassword(pass);
    }, [upperCase, lowerCase, number, symbol, length]);


    useEffect(() => {
        generatePassword();
    }, [upperCase, lowerCase, number, symbol, length, generatePassword]);

    return (
        <>
            <PasswordCon passwordData={password} />
            <div className="row"> <h2>Customize your Password</h2></div>
            <div className="container">
                <div className="passRow">
                    <div className="col select">
                        <div className="box"><input type="checkbox" checked={upperCase} onChange={() => setUpperCase((prev) => !prev)} /> <span>Uppercase</span></div>
                        <div className="box"><input type="checkbox" checked={lowerCase} onChange={() => setlowerCase((prev) => !prev)} /> <span>lowerCase</span></div>
                        <div className="box"><input type="checkbox" checked={symbol} onChange={() => setSymbol(prev => !prev)} /> <span>Symbol</span></div>
                        <div className="box"><input type="checkbox" checked={number} onChange={() => setNumber(prev => !prev)} /> <span>Number</span></div>
                    </div>

                    <div className="col length-col">
                        <h2>Password Length : <span>{length}</span></h2>
                        <div className="length">
                            <input type="range" className="rangeInp"
                                value={length}
                                min={6}
                                max={20}
                                onChange={(e) => setlength(Number(e.target.value))} />
                        </div>
                    </div>

                    <div className="col btn-col">
                        <button className="btn" onClick={generatePassword}>Generate</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PasswordMaker
