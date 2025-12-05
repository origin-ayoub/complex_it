import { sharePw } from "../utils/helpers";


export default function ActionBtns({ password, generate }) {
    return (
        <div className="action-buttons">
            <button className="btn-primary" onClick={generate}>
                Generate <i className="fas fa-sync-alt"></i> Password
            </button>

            <button
                onClick={() => sharePw(password)}
                className="btn-primary"
                disabled={!password}
                aria-label="share"
            >
                <i className="fas fa-share-alt"></i>
                {/* <span>Share</span> */}
            </button>
        </div>
    )
}

