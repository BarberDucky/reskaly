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