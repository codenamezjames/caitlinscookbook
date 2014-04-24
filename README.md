# Caitlin's Cook Book

powered by

* NPM
* Bower
* Grunt
* Angular
* Angular-routes
* Foundation
* https://github.com/wmluke/angular-flash

#### To install clone the repo, open comand line, "cd" in to the html directory within this app, run "npm install",run "bower install", run "grunt watch"

Please Note you must have a nginx server running this app with cross site enabled

and you must add the server to your hosts file

    server {
        add_header Access-Control-Allow-Origin *; #CORS for ajax calls
        server_name bp.localhost;
        root /path/to/html;
            index index.html index.htm;
            location / {
                    try_files $uri $uri/ /index.html;
            }
    }