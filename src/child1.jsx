import { useState } from "react";
// Sibling A
function Child1({ currUserName, updateUserName }) {
return <>
        <input type="text" value={currUserName} onChange={(e) => { updateUserName(e.target.value) }} />
    </>



}

export default Child1;