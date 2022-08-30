import { useEffect, useState } from "react"

function Aviao() {
    const [pes, setPes] = useState(0)

    useEffect(() => {
        console.log("O avião está em " + pes + " pés!")
    }, [pes])

    useEffect(() => {
        return () => console.log("Derrubaram o avião!")
    }, [])
    
    return(
        <>
            <h1>Avião</h1>

            <button onClick={() => {setPes(pes + 100)}}>Subir ✈</button>
        </>
    )
}

export default Aviao