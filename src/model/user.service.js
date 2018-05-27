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

export const postUser = async (username, password, isModerator) => {
    const check = await checkUserExists(username)
    if (!check && password !== "") {
        await fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify({id: username, password: password, isModerator: isModerator, subjects: []}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        return true
    } else {
        return false
    }
}

export const putUser = async (user) => {
    await fetch(`http://localhost:3001/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
}