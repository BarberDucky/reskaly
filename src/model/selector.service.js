export const getSelector = async (id) => {
    const res = await fetch(`http://localhost:3001/selectors/${id}`)
    const data = await res.json()
    return data
}

export const getScales = async (id) => {
    const res = await fetch(`http://localhost:3001/scales/${id}`)
    const data = await res.json()
    return data
}

export const putSelector = async (newSelector, id) => {
    const res = await fetch(`http://localhost:3001/selector/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newSelector),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
}
