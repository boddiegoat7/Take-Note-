function signupFormHandler(event) {
    event.preventDevault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            header: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

const login = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{"email":"nwestnedge0@cbc.ca","password":"password123"}'
  };
  
  fetch('/api/users/login', login)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const signup = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: '{"username":"luffyboy","email":"neastnedge0@cbc.ca","password":"password333"}'
      };
      
      fetch('/api/users/', signup)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

