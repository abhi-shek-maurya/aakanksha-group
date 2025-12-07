// ----------------------
// Firebase Setup
// ----------------------
const firebaseConfig = {
    apiKey: "AIzaSyBMhH-fGdi43R5zMKVDi2kYGutWhBqAK4A",
    authDomain: "aakanksha-group.firebaseapp.com",
    databaseURL: "https://aakanksha-group-default-rtdb.firebaseio.com",
    projectId: "aakanksha-group",
    storageBucket: "aakanksha-group.appspot.com",
    messagingSenderId: "747449666860",
    appId: "1:747449666860:web:551f2f9284454cb408b089",
    measurementId: "G-WRFX64073S"
};

const AAK = {}; // Global helper object

AAK.initFirebase = function () {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    AAK.db = firebase.database();
    AAK.auth = firebase.auth();
};

// Utility to convert phone number to fake email
// AAK.phoneToEmail = function (phone) {
//     return phone.replace(/\D/g, '') + '@phone.aak';
// };

// ----------------------
// Customer: Signup
// ----------------------
// AAK.createCustomer = async function ({ phone, password, name, region }) {
//     const email = AAK.phoneToEmail(phone);

    // Create auth user
    // const userCred = await AAK.auth.createUserWithEmailAndPassword(email, password);
    // const uid = userCred.user.uid;

    // // Save customer profile to Realtime DB
    // const profile = {
//         uid,
//         phone,
//         name,
//         region: region || '',
//         createdAt: Date.now()
//     };

//     await AAK.db.ref('customers/' + uid).set(profile);

//     return uid;
// };

// // ----------------------
// // Customer: Sign in
// // ----------------------
// AAK.signInCustomer = async function (phone, password) {
//     const email = AAK.phoneToEmail(phone);
//     const userCred = await AAK.auth.signInWithEmailAndPassword(email, password);
//     return userCred.user;
// };

// // ----------------------
// // Customer: Get Profile
// // ----------------------
// AAK.getCustomer = async function (uid) {
//     const snap = await AAK.db.ref('customers/' + uid).once('value');
//     return snap.val();
// };

// // ----------------------
// // Customer: Update Profile
// // ----------------------
// AAK.saveCustomerProfile = async function (uid, data) {
//     await AAK.db.ref('customers/' + uid).update(data);
// };
