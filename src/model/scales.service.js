export const getScales = async (id) => {
    const res = await fetch(`http://localhost:3001/scales?id=${id}`)
    const data = await res.json()
    return data[0]
}

export const postScales = async (id) => {
    console.log('udje da pravi skalu', id)
     await fetch(`http://localhost:3001/scales`, {
        method: 'POST',
        body: JSON.stringify({id: id, scales: []}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
}

export const putScales = async (newScales) => {
    await fetch(`http://localhost:3001/scales/${newScales.id}`, {
        method: 'PUT',
        body: JSON.stringify(newScales),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
}

export const deleteScales = async (id) => {
     await fetch(`http://localhost:3001/scales/${id}`, {
        method: 'DELETE'
    })
}