function loadNav() {
    const nav = `
    <nav> 
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="locations.html">Locations</a></li>
            <li><a href="characters.html">Characters</a></li>
            <li>Lore</li>
        </ul>
    </nav>`
    document.getElementById('nav-bar').innerHTML = nav
}
loadNav()