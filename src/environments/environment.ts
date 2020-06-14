// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {version} from '../../package.json';

export const environment = {
  production: false,
  version: version,
  mapBoxKey: 'pk.eyJ1IjoianVuaW9ybWFnMiIsImEiOiJja2E1OXRiN2UwZnMzM3BtYjJxYjRuajh3In0.LkgVWvR0Y1p3mbrho0GBAQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
