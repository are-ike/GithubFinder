class GitHub{
    constructor(){
        this.clientId = 'cc97d2fddef52491af28';
        this.clientSecret = 'ee3b2fd287cb62d19bdce442df93a42a4afcbf6b';
        this.reposCount = 5;
        this.reposSort = 'created: asc'
    }

    async get(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        
        const repos = await repoResponse.json();

        return {profile, repos};
    }
}