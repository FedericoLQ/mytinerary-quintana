const Filter = (props) => {

    const { cities, filter } = props;
console.log(filter);
    return (
        <div className="contenedor-botones">
            <input type="text" className="input" autoComplete="off" name="filtro" onChange={(e) => filter(cities, e.target.value.trim())} placeholder="Filtrar" />
        </div>
    )
}

export default Filter
