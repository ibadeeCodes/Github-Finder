class Github {
    constructor() {
        this.client_id = '573ac21c00d031af3e39'
        this.client_secret = '61004d8f1f432b3069e9653e78923c4d9d58a788'
        this.repo_count = 5
        this.repo_sort = 'created: asc'
    }

    async getUser(user) {

        
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        var profile = await profileResponse.json()
        var repos = await profileRepo.json()

        return {
            profile,
            repos
        }
    }
}