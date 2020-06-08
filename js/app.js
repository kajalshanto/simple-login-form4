// Show  password function

function show() {
    var pwd = document.getElementById('pwd');
    var icon = document.querySelector('.fas');
    if (pwd.type === 'password') {
        pwd.type = 'text';
        pwd.style.marginTop = '20px';
        icon.style.color = '#752092';
    } else {
        pwd.type = 'password';
        icon.style.color = 'grey';
    }
}
