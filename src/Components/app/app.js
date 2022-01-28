import React, {useState} from "react";

import './app.css'
import Header from "../header/header";
import Row from "../row/row";

const App = ({data}) => {

    const [model, setModel] = useState(data)

    const onChangeValue = (e, stringCode) => {
        const idx = model.codes.findIndex((item) => {
            return item.stringCode === stringCode
        })

        const oldCode = model.codes[idx]
        const newCode = {...oldCode, value: e.target.value}

        const newModel = [
            ...model.codes.slice(0, idx),
            newCode,
            ...model.codes.slice(idx + 1)
        ]

        setModel({
            codes: newModel
        })
    }

    const checkValid = (stringCode, value, formula) => {
        if (formula) {
            const splitFormula = formula.split('+').map((item) => {
                const findItem = model.codes.find((code) => {
                    return code.stringCode === +item
                })
                return +findItem.value
            })

            const sum = splitFormula.reduce(add, 0);

            function add(accumulator, a) {
                return accumulator + a;
            }

            if (sum === +value) {
                return true
            }
            return false

        }
        return value
    }

    return (

        <table className="table">
            <Header />
            <tbody>
            {model.codes.map((item) => {
                return (
                    <Row stringCode={item.stringCode}
                         value={item.value}
                         onChange={(e) => onChangeValue(e, item.stringCode)}
                         isValid={checkValid(item.stringCode, item.value, item.formula)}
                         key={item.stringCode} />
                )
            })}
            </tbody>
        </table>
    )
}

export default App