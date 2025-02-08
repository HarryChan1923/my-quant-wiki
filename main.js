document.addEventListener('DOMContentLoaded', () => {
    // ...existing动画代码...

    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    // 更新关键词与页面映射，新文件名匹配实际情况
    const searchMapping = [
        { label: 'Home', keywords: ['home', 'index'], page: 'home.html' },
        { label: 'Overview', keywords: ['overview', 'quantitative overview'], page: 'overview.html' },
        { label: 'Strategies', keywords: ['strategies', 'finance'], page: 'strategies.html' },
        { label: 'Tutorials', keywords: ['tutorials', 'courseware'], page: 'tutorials.html' },
        { label: 'Research', keywords: ['research', 'academic'], page: 'research.html' },
        { label: 'Insights', keywords: ['insights', 'tech', 'technology'], page: 'insights.html' }
    ];

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        const matches = searchMapping.filter(mapping =>
            mapping.keywords.some(keyword => query.includes(keyword))
        );

        if (matches.length === 0) {
            alert("No matching pages found.");
        } else if (matches.length === 1) {
            window.location.href = matches[0].page;
        } else {
            let message = "Multiple pages found:\n";
            matches.forEach((m, idx) => {
                message += `${idx + 1}. ${m.label}\n`;
            });
            message += "Enter the number of the page you want to visit:";
            const choice = prompt(message);
            const index = parseInt(choice, 10) - 1;
            if (matches[index]) {
                window.location.href = matches[index].page;
            } else {
                alert("Invalid selection.");
            }
        }
    }

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});
