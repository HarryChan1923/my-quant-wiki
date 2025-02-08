document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.article, .navbar, .container').forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease-out';
            el.style.opacity = 1;
        }, 100);
    });

    // ---- 新增搜索处理功能 ----
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    // 定义关键词与页面映射
    const searchMapping = [
        { label: 'Overview', keywords: ['overview', 'home', 'index'], page: 'index.html' },
        { label: 'Quantitative Overview', keywords: ['quantitative overview', 'overview'], page: 'quantitative.html' },
        { label: 'Quantitative Strategies', keywords: ['strategies', 'finance'], page: 'finance.html' },
        { label: 'Quantitative Tutorials', keywords: ['tutorials', 'courseware'], page: 'courseware.html' },
        { label: 'Quantitative Research', keywords: ['research', 'academic'], page: 'academic.html' },
        { label: 'Quantitative Technology Insights', keywords: ['tech', 'technology'], page: 'tech.html' }
    ];

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // 查找所有匹配项
        const matches = searchMapping.filter(mapping =>
            mapping.keywords.some(keyword => query.includes(keyword))
        );

        if (matches.length === 0) {
            alert("No matching pages found.");
        } else if (matches.length === 1) {
            window.location.href = matches[0].page;
        } else {
            // 多个匹配项时提示用户选择
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
    // 同时支持回车键搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});