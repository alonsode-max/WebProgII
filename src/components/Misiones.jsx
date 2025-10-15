function Misiones() {
    const quests = [
        {
            Id: 1,
            Nombre: "Quest 1",
            Descripción: "Algo",
            Puntos: 13
        },
        {
            Id: 2,
            Nombre: "Quest 2",
            Descripción: "Algo",
            Puntos: 13
        },
        {
            Id: 3,
            Nombre: "Quest 3",
            Descripción: "Algo",
            Puntos: 13
        },
    ]
  return (
    <>
        <ul>
            {quests.map(item=><li key={item.Id}><h3>{item.Nombre}</h3><p>{item.Puntos}</p></li>)}
        </ul>
    </>
  )
}

export default Misiones