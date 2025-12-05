import { useEffect, useRef } from "react";
import { copyToClip } from "../utils/helpers";

export default function PasswordCont({ password }) {
    const passInput = useRef(null);

    useEffect(() => {
        const pwDef = () => {
            if (!passInput?.current.readOnly) passInput.current.readOnly = true;
        }
        pwDef();
    }, []);

    return (
        <div className="section">
            <h2 className="section-title">
                <i className="fas fa-key"></i> Generated Password
            </h2>
            <div className="result-container">
                <input
                    readOnly
                    type="text"
                    id="password"
                    ref={passInput}
                    value={password}
                    className="result"
                    placeholder="Password..."
                />
                <button
                    className="copy-btn"
                    aria-label="Copy password"
                    onClick={() => copyToClip(password)}
                >
                    <i className="far fa-copy"></i>
                </button>
            </div>
        </div>
    )
}
