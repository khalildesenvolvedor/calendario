document.addEventListener('DOMContentLoaded', function() {
    const monthsBR = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const zodiacSymbols = {
        0: '♑',  // Janeiro - Capricórnio
        1: '♒',  // Fevereiro - Aquário
        2: '♓',  // Março - Peixes
        3: '♈',  // Abril - Áries
        4: '♉',  // Maio - Touro
        5: '♊',  // Junho - Gêmeos
        6: '♋',  // Julho - Câncer
        7: '♌',  // Agosto - Leão
        8: '♍',  // Setembro - Virgem
        9: '♎',  // Outubro - Libra
        10: '♏', // Novembro - Escorpião
        11: '♐'  // Dezembro - Sagitário
    };
    const zodiacColors = {
        0: 'capricorn',  // Janeiro
        1: 'aquarius',   // Fevereiro
        2: 'pisces',     // Março
        3: 'aries',      // Abril
        4: 'taurus',     // Maio
        5: 'gemini',     // Junho
        6: 'cancer',     // Julho
        7: 'leo',        // Agosto
        8: 'virgo',      // Setembro
        9: 'libra',      // Outubro
        10: 'scorpio',   // Novembro
        11: 'sagittarius'// Dezembro
    };
    const zodiacBiographies = {
        0: 'Capricórnio: 22 de dezembro a 19 de janeiro. Primeiro decanato (22 de dezembro a 31 de dezembro): Governado por Saturno. Segundo decanato (1 de janeiro a 10 de janeiro): Governado por Vênus. Terceiro decanato (11 de janeiro a 19 de janeiro): Governado por Mercúrio.',
        1: 'Aquário: 20 de janeiro a 18 de fevereiro. Primeiro decanato (20 de janeiro a 29 de janeiro): Governado por Urano. Segundo decanato (30 de janeiro a 8 de fevereiro): Governado por Mercúrio. Terceiro decanato (9 de fevereiro a 18 de fevereiro): Governado por Vênus.',
        2: 'Peixes: 19 de fevereiro a 20 de março. Primeiro decanato (19 de fevereiro a 28/29 de fevereiro): Governado por Netuno. Segundo decanato (1 de março a 10 de março): Governado por Lua. Terceiro decanato (11 de março a 20 de março): Governado por Marte.',
        3: 'Áries: 21 de março a 19 de abril. Primeiro decanato (21 de março a 30 de março): Governado por Marte. Segundo decanato (31 de março a 9 de abril): Governado pelo Sol. Terceiro decanato (10 de abril a 19 de abril): Governado por Júpiter.',
        4: 'Touro: 20 de abril a 20 de maio. Primeiro decanato (20 de abril a 30 de abril): Governado por Vênus. Segundo decanato (1 de maio a 10 de maio): Governado por Mercúrio. Terceiro decanato (11 de maio a 20 de maio): Governado por Saturno.',
        5: 'Gêmeos: 21 de maio a 20 de junho. Primeiro decanato (21 de maio a 31 de maio): Governado por Mercúrio. Segundo decanato (1 de junho a 10 de junho): Governado por Vênus. Terceiro decanato (11 de junho a 20 de junho): Governado por Urano.',
        6: 'Câncer: 21 de junho a 22 de julho. Primeiro decanato (21 de junho a 1 de julho): Governado pela Lua. Segundo decanato (2 de julho a 11 de julho): Governado por Plutão. Terceiro decanato (12 de julho a 22 de julho): Governado por Netuno.',
        7: 'Leão: 23 de julho a 22 de agosto. Primeiro decanato (23 de julho a 1 de agosto): Governado pelo Sol. Segundo decanato (2 de agosto a 11 de agosto): Governado por Júpiter. Terceiro decanato (12 de agosto a 22 de agosto): Governado por Marte.',
        8: 'Virgem: 23 de agosto a 22 de setembro. Primeiro decanato (23 de agosto a 1 de setembro): Governado por Mercúrio. Segundo decanato (2 de setembro a 11 de setembro): Governado por Saturno. Terceiro decanato (12 de setembro a 22 de setembro): Governado por Vênus.',
        9: 'Libra: 23 de setembro a 22 de outubro. Primeiro decanato (23 de setembro a 2 de outubro): Governado por Vênus. Segundo decanato (3 de outubro a 12 de outubro): Governado por Urano. Terceiro decanato (13 de outubro a 22 de outubro): Governado por Mercúrio.',
        10: 'Escorpião: 23 de outubro a 21 de novembro. Primeiro decanato (23 de outubro a 1 de novembro): Governado por Plutão. Segundo decanato (2 de novembro a 11 de novembro): Governado por Netuno. Terceiro decanato (12 de novembro a 21 de novembro): Governado pela Lua.',
        11: 'Sagitário: 22 de novembro a 21 de dezembro. Primeiro decanato (22 de novembro a 1 de dezembro): Governado por Júpiter. Segundo decanato (2 de dezembro a 11 de dezembro): Governado por Marte. Terceiro decanato (12 de dezembro a 21 de dezembro): Governado pelo Sol.'
    };

    const tableDays = document.getElementById('dias');
    const signSymbol = document.getElementById('sign-symbol');
    const bioContent = document.getElementById('bio-content');

    function getDayCalendar(month, year) {
        document.getElementById('mes').textContent = monthsBR[month];
        document.getElementById('ano').textContent = year;
        signSymbol.textContent = zodiacSymbols[month];
        bioContent.textContent = zodiacBiographies[month];

        let firstDayWeek = new Date(year, month, 1).getDay();
        let lastDayThisMonth = new Date(year, month + 1, 0).getDate();

        tableDays.innerHTML = ''; // Clear previous cells

        let row = document.createElement('tr');
        let index = 0;

        for (let i = 0; i < firstDayWeek; i++, index++) {
            let cell = document.createElement('td');
            cell.classList.add('mes-anterior');
            row.appendChild(cell);
        }

        for (let i = 1; i <= lastDayThisMonth; i++, index++) {
            if (index % 7 === 0) {
                tableDays.appendChild(row);
                row = document.createElement('tr');
            }
            let cell = document.createElement('td');
            cell.textContent = i;

            let today = new Date();
            if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === i) {
                cell.classList.add('hoje');
            }

            row.appendChild(cell);
        }

        while (index % 7 !== 0) {
            let cell = document.createElement('td');
            cell.classList.add('proximo-mes');
            row.appendChild(cell);
            index++;
        }

        tableDays.appendChild(row);
    }

    function applyZodiacColor(month) {
        const content = document.querySelector('.conteudo');
        const zodiacClass = zodiacColors[month];
        content.className = 'conteudo'; // Reset classes
        content.classList.add(zodiacClass);
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();
    getDayCalendar(month, year);
    applyZodiacColor(month);

    document.getElementById('btn_next').onclick = function() {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        getDayCalendar(month, year);
        applyZodiacColor(month);
    };

    document.getElementById('btn_prev').onclick = function() {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        getDayCalendar(month, year);
        applyZodiacColor(month);
    };
});
