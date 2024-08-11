const data = [
    {name: 'Tomato', cost: 10, weight: 5},
    {name: 'Carrot', cost: 15, weight: 2},
    {name: 'Onion', cost: 5, weight: 7}
];

function getSortValue(item) {
    return item.cost
}
const sortOrder = 'asc';

data.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    const reverseSortOrder = sortOrder === 'asc' ? 1 : -1;

    if (typeof valueA === 'string' || typeof valueB === 'string') {
        return (valueA.localeCompare(valueB)) * reverseSortOrder;
    } else {
        return (valueA - valueB) * reverseSortOrder;
    }
});