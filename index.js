const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryFilter = document.getElementById('category-filter');
const resultsList = document.getElementById('results-list');

const blogPosts = [
    { title: 'Post 1', content: 'This is the content of post 1.', category: 'tech' },
    { title: 'Post 2', content: 'This is the content of post 2.', category: 'lifestyle' },
    { title: 'Post 3', content: 'This is the content of post 3.', category: 'tech' },
    // Add more blog posts here...
];

searchButton.addEventListener('click', () => {
    resultsList.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredPosts = blogPosts.filter((post) => {
        if (category === 'all' || post.category === category) {
            return post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
        }
        return false;
    });

    let resultsHtml;
    if (filteredPosts.length === 0) {
        resultsHtml = '<li>No match found.</li>';
    } else {
        resultsHtml = filteredPosts.map((post) => {
            return `
                <li>
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                </li>
            `;
        }).join('');
    }

    resultsList.innerHTML = resultsHtml;
});
