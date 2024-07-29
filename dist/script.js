"use strict";
// Função pra atualizar o dia da semana com base na data
function updateDayOfWeek() {
    const dateInput = document.getElementById('data');
    const dayOfWeekInput = document.getElementById('dweek');
    if (dateInput && dayOfWeekInput) {
        // Cria uma nova data com o valor do input e ajusta o horário para 00:00:00
        const selectedDate = new Date(dateInput.value + 'T00:00:00');
        // Obtém o dia da semana
        const dayOfWeek = selectedDate.toLocaleDateString('pt-BR', { weekday: 'long' });
        const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
        dayOfWeekInput.value = capitalizedDayOfWeek;
        console.log('Valor da data:', dateInput.value); //Verifique o valor da data no console
        console.log('Dia da semana:', capitalizedDayOfWeek); // Verifique o dia da semana no console.    
    }
}
//Adiciona um evento de mudança ao campo de data
const dateInput = document.getElementById('data');
if (dateInput) {
    dateInput.addEventListener('change', updateDayOfWeek);
}
// Função pra alternar a visibilidade da barra lateral
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.content');
    console.log('Sidebar antes da mudança:', sidebar.classList);
    if (window.innerWidth <= 768) {
        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            sidebar.classList.add('hidden');
            sidebar.style.transform = 'translateY(-100%)';
            container.style.marginTop = '0';
        }
        else {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('show');
            sidebar.style.transform = 'translateY(0)';
            container.style.marginTop = `${sidebar.clientHeight}px`;
        }
    }
    else {
        sidebar.classList.remove('show', 'hidden');
        sidebar.style.transform = 'translateY(0)';
        container.style.marginLeft = '200px';
    }
    console.log('Sidebar depois da mudança:', sidebar.classList);
}
// Adiciona o evento de clique para alternar a barra lateral apenas uma vez
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Previne a propagação do clique.
            toggleSidebar();
        });
    }
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.content');
    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('show');
        container.style.marginLeft = '0';
    }
    else {
        sidebar.classList.remove('hidden');
        sidebar.classList.remove('show');
        container.style.marginLeft = '200px';
    }
});
// Ajusta a visibilidade da sidebar ao redimensionar a tela
window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.content');
    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('show');
        container.style.marginLeft = '0';
    }
    else {
        sidebar.classList.remove('hidden');
        sidebar.classList.remove('show');
        container.style.marginLeft = '200px';
    }
});
