import React from "react";

import './row.css'


const Row = ({stringCode, value, onChange, isValid}) => {

    let className = ""
    if (typeof isValid === "boolean") {
        isValid ? className += "true" : className += "false"
    }

    return (
        <tr className={className}>
            <th scope="row" className='item'>{stringCode}</th>
            <td><input type="number" className="form-control" value={value} onChange={onChange} />
            </td>
        </tr>
    )
}

export default Row