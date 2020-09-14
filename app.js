const github = new GitHub();
const ui = new UI();
//GET INPUT
const searhUser = document.getElementById('searchUser');
searhUser.addEventListener('keyup', () => {
    const userText = searhUser.value;
    if(userText !== ''){
        github.get(userText)
        .then(userObject => {
            if(userObject.profile.message === 'Not Found'){
            //SHOW ALERT
            ui.showAlert('User Not Found', 'alert alert-danger')
        }else{
            //SHOW PROFILE
            //REMOVE ALERT ONCE A FOUND USER IS TYPED
            ui.clearAlert();
            ui.showProfile(userObject.profile);
            ui.showRepos(userObject.repos);
        }});
    }else{
        //CLEAR PROFILE
        ui.clearProfile();
    }
});