import './UnitConverter.scss'

type UnitConverterProps = {
    unit: string;
    setUnit: any;
}

const UnitConverter = ({ unit, setUnit }: UnitConverterProps) => {
    return (
        <form>
            <div className="radio-container">
                <div className="radio">
                    <label htmlFor="celsius">
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "C"}
                            value="C"
                            onChange={(e) => setUnit(e.target.value)}
                        />
                        C
                    </label>
                </div>
                <div className="radio">
                    <label htmlFor="fahrenheit">
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "F"}
                            value="F"
                            onChange={(e) => setUnit(e.target.value)}
                        />
                        F
                    </label>
                </div>
            </div>
        </form>
    )
}
export default UnitConverter