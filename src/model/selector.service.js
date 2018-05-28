export const getSelector = async (id) => {
    const res = await fetch(`http://localhost:3001/selectors?id=${id}`)
    const data = await res.json()
    return data[0]
}

export const postSelector = async (id) => {
    console.log('udje da pravi selector', id)
    await fetch(`http://localhost:3001/selectors`, {
        method: 'POST',
        body: JSON.stringify({id: id, selector: []}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
}

export const putSelector = async (newSelector) => {
    await fetch(`http://localhost:3001/selectors/${newSelector.id}`, {
        method: 'PUT',
        body: JSON.stringify(newSelector),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
}

export const deleteSelector = async (id) => {
     await fetch(`http://localhost:3001/selectors/${id}`, {
        method: 'DELETE'
    })
}
