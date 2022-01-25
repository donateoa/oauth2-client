import { InjectionToken } from '@angular/core';

export interface GoogleCalendarApiConfig {
  clientId: string;
  scope: string;
  apiKey: string;
  discoveryDocs: string[];
}
export const GOOGLE_CALENDAR_API_CONFIG = new InjectionToken<GoogleCalendarApiConfig>('googleCalendarApiConfig');
