const account = new Account;
const ui = new UI;

const inputPrompt = document.getElementById('inputPrompt');

inputPrompt.addEventListener('keyup', (e) => {
  const userInput = e.target.value;

  if(userInput !== ''){
   account.findProfile(userInput)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        ui.alertMessage('User not found', 'alert alert-danger');
      } else {
        ui.displayProfile(data.profile);
        ui.displayRepos(data.repos);
      }
    })
  } else {
    ui.clearUser();
  }
}); 