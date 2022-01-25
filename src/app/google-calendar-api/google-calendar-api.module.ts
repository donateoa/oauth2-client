import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleCalendarApiConfig, GOOGLE_CALENDAR_API_CONFIG } from './google.calendar.api.config';
import { GoogleCalendarApiService } from './google-calendar-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GoogleCalendarApiModule {
  static forRoot(config: GoogleCalendarApiConfig): ModuleWithProviders<GoogleCalendarApiModule> {
    return {
      ngModule: GoogleCalendarApiModule,
      providers: [
        { provide: GOOGLE_CALENDAR_API_CONFIG, useValue: config },
        GoogleCalendarApiService
      ]
    };
  }
}