import { hover } from "@testing-library/user-event/dist/hover"

const Button = (props)=>{
    return(
        <div>
            <button style={{backgroundColor:`${props.color}`, color:"white", margin:`${props.margin}`, marginTop:`${props.top}`, padding:"7px", width:`${props.width}`, height:`${props.height}`, borderRadius:"5px", cursor:"pointer", border:"0px" }}>{props.name}</button>
        </div>
    )
}

export default Button