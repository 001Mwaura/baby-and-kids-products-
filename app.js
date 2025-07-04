// Fetch commodities from backend and display them
fetch('http://localhost:5000/commodities')
    .then(res => res.json())
    .then(data => {
        const commoditiesDiv = document.getElementById('commodities');
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'commodity';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>KES ${item.cost}</p>
            `;
            commoditiesDiv.appendChild(div);
        });
    })
    .catch(err => console.log(err));
