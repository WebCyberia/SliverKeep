fetch('../json/locations.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json();
    })
    .then(data => {
        const locations = data;

        const searchBar = document.querySelector("#searchBar")
        const resultContainer = document.querySelector("#results")

        
        locations.forEach(location => {
            const li = document.createElement("li");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const image = document.createElement("img");
            image.src = location.img
            h2.textContent = `${location.name}`
            p.textContent = `${location.description}`
            li.appendChild(h2)
            li.appendChild(p)
            resultContainer.appendChild(image)
            resultContainer.appendChild(li)
        })
            


        searchBar.addEventListener('input', function(event) {
            const query = event.target.value.toLowerCase();
            resultContainer.innerHTML = '';

            const filteredLocations = locations.filter(location => {
                return location.name.toLowerCase().includes(query) || 
                location.description.toLowerCase().includes(query);
            });

            filteredLocations.forEach(location => {
                const li = document.createElement("li");
                const h2 = document.createElement("h2");
                const p = document.createElement("p");
                const image = document.createElement("img");
                image.src = location.img
                h2.textContent = `${location.name}`
                p.textContent = `${location.description}`
                li.appendChild(h2)
                li.appendChild(p)
                resultContainer.appendChild(image)
                resultContainer.appendChild(li)
            });
            

            if (filteredLocations.length === 0) {
                const noResult = document.createElement('li');
                noResult.textContent = 'No Locations Found';
                resultContainer.appendChild(noResult);
            }
        })
    })
    .catch(error => {
        console.error('There was a problem with the fetch opperation:', error)
    })