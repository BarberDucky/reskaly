export const getUser = async (username) => {
    const res = await fetch(`http://localhost:3001/users/${username}`)
    const data = await res.json()
    return data
}