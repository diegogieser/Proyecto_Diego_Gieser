// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frntend-drg-prueba-3a2d9',
    appId: '1:1081168900780:web:9d1d826e283233f696e509',
    storageBucket: 'frntend-drg-prueba-3a2d9.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyAwVPMn8-wdCbzxKVjh8wNG0LAlCFYU9Zc',
    authDomain: 'frntend-drg-prueba-3a2d9.firebaseapp.com',
    messagingSenderId: '1081168900780',
  },
  production: false,
  //Para pruebas locales
  //URL: 'http://localhost:8080/',
  //Para Produccion
  URL: 'https://bknd-drg-prueba.herokuapp.com/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
