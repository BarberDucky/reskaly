import { getSubjects } from "./subject.service";

export const getUser = async (username) => {
    const res = await fetch(`http://localhost:3001/users?id=${username}`)
    const data = await res.json()

    let user = data[0]
    let newArray = []
    let checkedSubject
    for(let i=0; i<user.subjects.length; i++){
        checkedSubject = await getSubjects(user.subjects[i].id)
        console.log('new user', checkedSubject, user.subjects[i].id)
        if (checkedSubject) {
            newArray.push(user.subjects[i])
        }
    }
    user.subjects = newArray
    await putUser(user)
    return user
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