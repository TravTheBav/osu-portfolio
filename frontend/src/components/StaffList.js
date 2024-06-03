import React from "react";
import StaffRow from "./StaffRow";

function StaffList({staff}) {
    return (
        <tbody>
            { staff.map((staffMember, idx) => {
                return (<StaffRow result={staffMember} key={idx}/>)
            }) }
        </tbody>
    );
}

export default StaffList;
