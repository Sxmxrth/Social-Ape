const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp()

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello World!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
    admin.firestore().collection("screams").get().then(data => {
        let screams = []
        data.forEach(docs => {
            screams.push(docs.data())
        })
        return res.json(screams)
    })
        .catch(err => {
            console.log(err);
        })
})