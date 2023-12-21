import { apiKey } from "../utils/ApiKey";

const connectUserToSpoonacular = async (userProfile, callback) => {
    const url = `https://api.spoonacular.com/users/connect?apiKey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": userProfile.fullName,
                "firstName": userProfile.fullName,
                "lastName": userProfile.fullName,
                "email": userProfile.email
            }),
        });

        const data = await response.json();
        console.log('data: ', data);
        callback(data);
        // Handle the data or response here
    } catch (error) {
        console.error('Error connecting user to Spoonacular: ', error);
    }
};

export default connectUserToSpoonacular;