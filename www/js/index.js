let app = new Framework7({
  // App root element
  root: '.app',
  // App Name
  name: 'Trade App',
  // App id
  id: 'com.kelnovi.tradeapp'
});


let $$ = Dom7;


 let mainview = app.views.create('.view-main', {
    url: '/',
    routes: [
        {
            path: '/',
            templateUrl: 'pages/home.html',
            on: {
              
            }
        }
    ]
});
