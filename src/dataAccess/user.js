import firebase from 'firebase'

export function GetAllUsers(){
    const db = firebase.firestore()
    var data = []
    
    db.collection('users.all').get().then((snap) => {
        snap.docs.forEach((doc) => {
            data.push(doc.data())
        })
    })

    return data
}
