const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

async function setAdminRole(uid) {
    try {
        await admin.auth().setCustomUserClaims(uid, { isAdmin: true });
        console.log(`✅ Successfully set admin role for ${uid}`);
    } catch (error) {
        console.error("❌ Error setting admin role:", error);
    }
}
// 🔹 Replace with your admin user's UID
const adminUID = "hdGZCBpECPeojhm68eJWkkX3NB73";
setAdminRole(adminUID);

// node setAdminRole.js

