class UI {
  constructor() {
    this.profile = document.getElementById('github-profile');
  }

  displayProfile(profile) {
    this.profile.innerHTML = `
      <div>
        <div>
          <div id="img-container">
            <img class="img-fluid mb-2" src="${profile.avatar_url}">
            <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div>
            <span>Public Repos: ${profile.public_repos}</span>
            <span>Public Gists: ${profile.public_gists}</span>
            <span>Followers: ${profile.followers}</span>
            <span>Following: ${profile.following}</span>
            <br><br>
            <hr>
            <ul>
              <li >Company: ${profile.company}</li>
              <li>Website/Blog: ${profile.blog}</li>
              <li>Location: ${profile.location}</li>
              <li>Member Since: ${profile.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  displayRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div>
          <div>
            <div>
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div>
            <span>Stars: ${repo.stargazers_count}</span>
            <span>Watchers: ${repo.watchers_count}</span>
            <span>Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  alertMessage(message, className) {
    this.hideAlert();
    const div  =  document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container =  document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  hideAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  clearUser() {
    this.profile.innerHTML = '';
  }
}