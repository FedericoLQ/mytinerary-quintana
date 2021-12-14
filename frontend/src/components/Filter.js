const Filter = (props) => {

    const { cities, filter } = props;

    return (
        <div className="contenedor-botones">
            <input type="text" className="input text-center" autoComplete="off" name="Filter" onChange={(e) => filter(cities, e.target.value.trim())} placeholder="Search City" />
        </div>
    )
}

export default Filter
