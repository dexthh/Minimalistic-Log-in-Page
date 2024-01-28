function darkUserName(){
    document.getElementById('userName').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.getElementById('personsvg').style.fill = '#ffffff';
    document.getElementById('userNameField').style.color = '#ffffff';
    document.getElementById('userNameField').placeholder = '';
    document.getElementById('userName').style.border = '#ffffff solid 1px';
}

function defaultUserName(){
    document.getElementById('userName').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.getElementById('personsvg').style.fill = '#c1c1c1';
    document.getElementById('userNameField').style.color = '#c1c1c1';
    document.getElementById('userNameField').placeholder = 'Enter username';
    document.getElementById('userName').style.border = 'none';
}

function darkPassword(){
    document.getElementById('password').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.getElementById('personlocksvg').style.fill = '#ffffff';
    document.getElementById('passwordField').style.color = '#ffffff';
    document.getElementById('passwordField').placeholder = '';
    document.getElementById('password').style.border = '#ffffff solid 1px';
}

function defaultPassword(){
    document.getElementById('password').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.getElementById('personlocksvg').style.fill = '#c1c1c1';
    document.getElementById('passwordField').style.color = '#c1c1c1';
    document.getElementById('passwordField').placeholder = 'Enter password';
    document.getElementById('password').style.border = 'none';
}