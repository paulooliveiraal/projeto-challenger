"use strict";
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/partidas');
        const partidas = await response.json();
        const partidasList = document.getElementById('partidas-list');
        partidas.forEach((partida) => {
            // Primeira letra maiuscula nesses campos \/
            const lane = capitalizeFirstLetter(partida.lane);
            const wlane = capitalizeFirstLetter(partida.wlane);
            const gresult = capitalizeFirstLetter(partida.gresult);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${partida.data}</td>
                <td>${partida.dweek}</td>
                <td>${partida.periodo}</td>
                <td>${partida.nmatch}</td>
                <td>${lane}</td>
                <td>${partida.pick}</td>
                <td>${partida.enemy}</td>
                <td>${wlane}</td>
                <td>${partida.kills}</td>
                <td>${partida.deaths}</td>
                <td>${partida.assists}</td>
                <td>${gresult}</td>
                <td>${partida.pdl}</td>
                <td>${partida.farm}</td>
                <td>${partida.elo}</td>
                <td>${partida.resume}</td>
            `;
            partidasList === null || partidasList === void 0 ? void 0 : partidasList.appendChild(row);
        });
    }
    catch (error) {
        console.error('Erro ao buscar as partidas:', error);
    }
});
