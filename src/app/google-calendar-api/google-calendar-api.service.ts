import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GoogleCalendarApiConfig, GOOGLE_CALENDAR_API_CONFIG } from './google.calendar.api.config';
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarApiService {
  config: GoogleCalendarApiConfig;
  componentName = 'GoogleCalendarApiService';
  auth2;
  calendarId = 'primary';
  authenticationsState = new BehaviorSubject<boolean>(false);
  constructor(
    @Inject(GOOGLE_CALENDAR_API_CONFIG) config: GoogleCalendarApiConfig,
  ) {
    this.config = config;
  }

  /**
    *  Initializes the API client library and sets up sign-in state
    *  listeners.
    */
  async initClient(changeAuthStatus) {
    const { clientId, apiKey, scope, discoveryDocs } = this.config;
    try {
      await gapi.load('client:auth2', async () => {
        console.log('loaded package', this.componentName);
        this.auth2 = await gapi.client.init({
          apiKey,
          clientId,
          discoveryDocs,
          scope
        });

        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(changeAuthStatus);

        // Handle the initial sign-in state.
        changeAuthStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });


    } catch (error) {
      console.log('error on initClient', this.componentName, error);
    }
  }
  updateSigninStatus(isSignedIn: boolean) {
    try {
      console.log('isSignedIn ', this.componentName, isSignedIn);
      this.authenticationsState.next(isSignedIn);
    } catch (error) {
    }
  }
  signIn() {
    gapi.auth2.getAuthInstance().signIn();
  }

  signOut() {
    gapi.auth2.getAuthInstance().signOut();
  }
  getCurrentUser() {
    const auth2 = gapi.auth2.getAuthInstance();
    const profile = auth2.currentUser.get().getBasicProfile();
    return profile;
  }
}

