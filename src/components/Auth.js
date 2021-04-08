class Auth {
    constructor() {
        this.authenticated = false
    }

    signup(cb) {
        this.authenticated = true
        cb()
    }

    signin(cb) {
        this.authenticated = true
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth()