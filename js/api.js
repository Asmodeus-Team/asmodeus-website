let api = new (function API() {
    this.api_token = localStorage.getItem('asmodeus-api-token');
    this.api_url = 'https://api.asmodeus.app/'

    this.performRequest = function(http_method, method, params) {
        let self = this;
        params = params || {};
        if(this.api_token) 
            params.token = this.api_token;
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: self.api_url + method,
                type: http_method,
                data: params,
                cache: false,
                success: (v) => {
                    if(v.error) {
                        reject({
                            'type': 'api_error',
                            'xhr': null,
                            'status': v.error,
                            'error': v.message
                        });
                    } else {
                        resolve(v);
                    }
                },
                error: (xhr, status, error) => {
                    if(xhr.responseJSON) {
                        reject({
                            'type': 'api_error',
                            'xhr': xhr,
                            'status': xhr.responseJSON.error,
                            'error': xhr.responseJSON.message
                        })
                    } else {
                        reject({
                            'type': 'http_error',
                            'xhr': xhr,
                            'status': status,
                            'error': error
                        });
                    }
                }

            });
        });
    }

    this.performPostRequest = function(method, params) {
        return this.performRequest('POST', method, params);
    }
    this.performGetRequest = function(method, params) {
        return this.performRequest('GET', method, params);
    }

    this.onload = function() {
        this.performPostRequest('user/profile_info').then(function(resp) {
            console.log(resp);
            $('#user-logged-in-info h5').text(resp.username);
            $('#user-logged-in-info img').attr('src', resp.avatar);


            $('.if-logged-in').css({'display': 'block'});
            $('.if-not-logged-in').css({'display': 'none'});
        }).catch(function(error) {
            $('.if-logged-in').css({'display': 'none'});
            $('.if-not-logged-in').css({'display': 'block'});
        });
    }

    this.logout = function() {
        localStorage.removeItem('asmodeus-api-token');
        location.reload();
    }

    this.login = function(username, password) {
        return this.performPostRequest('auth/login', {
            'username': username, 'password': password
        }).then(function(resp) {
            localStorage.setItem('asmodeus-api-token', resp.token);
            return resp;
        });
    }

    this.register = function(username, email, password) {
        return this.performPostRequest('auth/register', {
            'username': username, 'email': email, 'password': password
        });
    }

})();
