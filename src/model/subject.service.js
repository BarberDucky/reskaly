export const postSubject = async(subject) => {
    console.log(`subject : ${subject}`)
    await fetch('http://localhost:3001/subjects', {
            method: 'POST',
            body: JSON.stringify({id: subject.id}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
}

export const putSubject = async(subject) => {
    console.log(`subject : ${subject}`)
    await fetch(`http://localhost:3001/subjects/${subject.id}`, {
            method: 'PUT',
            body: JSON.stringify(subject),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
}

export const deleteSubject = async(subject) => {
    console.log(`subject : ${subject}`)
    await fetch(`http://localhost:3001/subjects/${subject.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
}
