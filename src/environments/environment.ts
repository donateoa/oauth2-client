// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleCalendarApiConfig: {
    clientId: '50209459788-nl6n9vdmsc1s1sogr7rslps5vcrbf3qo.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/calendar',
    apiKey: 'AIzaSyCYG5QI5K4yBkGnk9wKQlfbmnP5QRWG6wI',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
