
const Item = ( {producto} ) => {
    return (
        <div className="producto">
            <img src={producto.image} alt="" />
        </div>
    )
}

export default Item