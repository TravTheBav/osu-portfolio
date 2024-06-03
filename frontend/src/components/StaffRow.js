import React from "react";


function StaffRow({ result }) {

    return (
        <tr>
            <td><img src={result.picture.thumbnail} alt={"thumbnail image for " + result.name.first + " " + result.name.last}></img></td>
            <td><a href={"mailto:" + result.email}>{result.name.first + " " + result.name.last}</a></td>
            <td>{result.phone}</td>
            <td>{result.location.timezone.description}</td>
        </tr>
    );
}

export default StaffRow;