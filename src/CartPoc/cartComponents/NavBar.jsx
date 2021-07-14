import React from 'react'
import {connect} from "react-redux"

function NavBar(props) {
    const {count}=props;
    return (
        <div style={{ height: "2rem", backgroundColor: "lightgray", color: "black", fontSize: "150%"}}>
           NavBar
           <span style={{marginLeft:"2rem"}}>{count}</span>
        </div>
    )
}
const mapStoreToProps=(store)=>{
    return store;
}

export default connect(mapStoreToProps)(NavBar);
