const mockDatabase = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey" }
];

function getUser(id, callback) {
    setTimeout(() => {
        const user = mockDatabase.find(user => user.id === id);
        if (user) {
            callback(null, user);
        } else {
            callback("User not found");
        }
    }, 2000); // Simulating 2 seconds delay
}
function processData(userData, callback) {
    setTimeout(() => {
        if (userData) {
            userData.name = userData.name.toUpperCase();
            callback(null, userData);
        } else {
            callback(new Error("No user data provided"));
        }
    }, 1500); // Simulate 1.5 seconds delay for processing
}

function Main (userId) {
    getUser(userId, (error, user) => {
        if (error) {
            console.error("Error getting user info:", error.message);
        } else {
            processData(user, (error, processeData) => {
                if (error) {
                    console.error("Error processing user data:", error.message);
                } else {
                    console.log("Processed user data:", processeData);
                }
            });
        }
    });
}

Main(1);
