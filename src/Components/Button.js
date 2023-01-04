
const Button = (props)=>{
    return(
        <div>
            <button style={{color:`${props.color}`, margin:`${props.margin}`, marginTop:`${props.top}`, width:`${props.width}`, height:`${props.height}`, borderRadius:`${props.radius}`}}>{props.name}</button>
        </div>
    )
}

export default Button