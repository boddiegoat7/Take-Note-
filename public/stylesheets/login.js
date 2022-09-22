// function login(signupFormHandler)

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            header: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

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

