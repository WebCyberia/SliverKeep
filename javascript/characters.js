fetch('../json/characters.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json();
})
.then(data => {
    const characters = data;

    const searchBar = document.querySelector("#searchBar")
    const resultContainer = document.querySelector("#results")

    
    characters.forEach(character => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const image = document.createElement("img");
        image.src = character.img
        h2.textContent = `${character.name}`
        p.textContent = `${character.description}`
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(image)
        resultContainer.appendChild(li)
        
    })
        


    searchBar.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        resultContainer.innerHTML = '';

        const filteredCharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(query) || 
            character.description.toLowerCase().includes(query);
        });

        filteredCharacters.forEach(character => {
            const li = document.createElement("li");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const image = document.createElement("img");
            image.src = character.img
            h2.textContent = `${character.name}`
            p.textContent = `${character.description}`
            li.appendChild(h2)
            li.appendChild(p)
            
            resultContainer.appendChild(li)
            resultContainer.appendChild(image)
        });
        

        if (filteredCharacters.length === 0) {
            const noResult = document.createElement('li');
            noResult.textContent = 'No Locations Found';
            resultContainer.appendChild(noResult);
        }
    })
})
.catch(error => {
    console.error('There was a problem with the fetch opperation:', error)
})