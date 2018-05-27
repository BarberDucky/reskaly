export const getUser = async (username) => {
    const res = await fetch(`http://localhost:3001/users?id=${username}`)
    const data = await res.json()
    return data[0]
}

export const checkUserExists = async (username) => {
    const res = await fetch(`http://localhost:3001/users?id=${username}`)
    const data = await res.json()
    if (data.length !== 0) {
        return true
    } else {
        return false
    }
}

export const postUser = async (username, password) => {
    const check = await checkUserExists(username)
    if (!check && password !== "") {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify({id: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        return true
    } else {
        return false
    }
}