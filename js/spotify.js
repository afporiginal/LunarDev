document.addEventListener("DOMContentLoaded", async () => {
    const clientId = "SEU_CLIENT_ID_AQUI";
    const clientSecret = "SEU_CLIENT_SECRET_AQUI";
    const refreshToken = "SEU_REFRESH_TOKEN_AQUI";

    async function getAccessToken() {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`)
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken
            })
        });
        const data = await response.json();
        return data.access_token;
    }

    async function getTopTracks() {
        const accessToken = await getAccessToken();
        const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const data = await response.json();
        return data.items;
    }

    async function displayTracks() {
        const tracks = await getTopTracks();
        const container = document.getElementById("spotify-tracks");

        tracks.forEach(track => {
            const trackElement = document.createElement("div");
            trackElement.className = "bg-gray-800 p-4 rounded-lg";
            trackElement.innerHTML = `
                <p class="text-lg font-medium">${track.name}</p>
                <p class="text-gray-400">${track.artists[0].name}</p>
            `;
            container.appendChild(trackElement);
        });
    }

    displayTracks();
});
