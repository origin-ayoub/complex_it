export default function PasswordSettings({ pw_range, setRange }) {
    return (
        <div className="section">
            <h2 className="section-title">
                <i className="fas fa-sliders-h"></i> Password Settings
            </h2>
            <div className="pwLnCn">
                <div className="pwLnBox">
                    <label htmlFor="length">Password Length:</label>
                    <span>{pw_range}</span>
                </div>
                <input
                    id="length"
                    min={"10"}
                    max={50}
                    type="range"
                    value={pw_range}
                    onChange={e => setRange(Number(e.target.value))}
                />
            </div>
        </div>
    )
}
