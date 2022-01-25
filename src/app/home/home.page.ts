import { Component } from '@angular/core';
import { GoogleCalendarApiService } from '../google-calendar-api/google-calendar-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isSignedIn = false;
  user: any;
  constructor(private googleCalendarApiService: GoogleCalendarApiService) { }

  ionViewWillEnter() {
    this.googleCalendarApiService.initClient(async (isSignedIn) => {
      this.isSignedIn = isSignedIn;
      if (isSignedIn) {
        this.user = this.googleCalendarApiService.getCurrentUser();
      }
    });
  }
  onSignInClick() {
    this.googleCalendarApiService.signIn();
  }
  onSignOutClick() {
    this.googleCalendarApiService.signOut();
    window.location.reload();
  }
}
