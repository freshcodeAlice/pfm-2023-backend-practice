const form = document.querySelector("#heroForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const obj = {};
   for (let i = 0; i < form.elements.length - 1; i++) {
    const item = form.elements[i];
    obj[item.name] = item.value
   }
   apiSend('heroes', obj);
});


function apiSend(url, data) {
    const API_BASE = 'http://localhost:5000/api';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(data)
    };
    fetch(`${API_BASE}/${url}`, options)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
}