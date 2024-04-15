const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter game ID: ', async (gameId) => {
    const apiUrl = `https://apis.roblox.com/universes/v1/places/${gameId}/universe`;

    try {
        const response = await axios.get(apiUrl);
        console.log(`Game ID universe: ${response.data.universeId}`);
    } catch (error) {
        console.error('Error fetching data. Please try again.');
    }

    rl.close();
});
