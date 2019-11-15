import firebase from 'firebase'

export function GetAllTickets(){
    const db = firebase.firestore()
    var data = []
    
    db.collection('tickets.all').get().then((snap) => {
        snap.docs.forEach((doc) => {
            data.push(doc.data())
        })
    })

    return data
}
