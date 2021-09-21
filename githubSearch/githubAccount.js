class Account {
  constructor(){
    this.client_id = '5b17aed62182493b3ef4'; // 123456
    this.client_secret = 'fd0cbd6cd43b72f1be9638cd1b30b5a21958e615'; // 123456
    this.repos_count = 6;
  }
  
  async findProfile(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=created: asc&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    console.log(repos);

    return {
      profile,
      repos
    }
  }
}