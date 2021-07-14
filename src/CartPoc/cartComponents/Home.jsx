import React from 'react'
import {connect} from "react-redux";

function Home(props) {
    const {productArray}=props;
    return (
        <div style={{display:"flex"}}>
            {productArray.map((product)=>{
                return(
                    <div key={product.id}>
                        <img src={product.image} style={{height:"20vh"}}/>
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button onClick={props.addToCart}>Add to Cart</button>
                    </div>
                )
            })}
            
        </div>
    )
}

const mapStateToProps=(store)=>{
    return store;
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart:()=>{
            dispatch({
                type:"addToCart"
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
