// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frntend-drg-prueba',
    appId: '1:565189939586:web:d1aa00f0d96ce030ceff9b',
    storageBucket: 'frntend-drg-prueba.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCZ6WwiXyceFPxTi9DVsly0ds0kCEPHzGo',
    authDomain: 'frntend-drg-prueba.firebaseapp.com',
    messagingSenderId: '565189939586',
  },
  production: false,
  //Para pruebas locales
  //URL: 'http://localhost:8080/',
  //Para Produccion
  URL: 'https://bknd-argentina-arograma.herokuapp.com/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
