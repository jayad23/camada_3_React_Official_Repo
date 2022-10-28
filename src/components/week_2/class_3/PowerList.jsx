import React from 'react'
const PowerList = ({ list }) => {
    const arrOfList = Object.keys(list)
    return (
        <ul style={{ listStyle: "none", padding: "0" }}>
            {
                arrOfList.map(powerItem => (
                    <li key={powerItem}>{list[powerItem]}</li>
                ))
            }
        </ul>
    )
}

export default PowerList