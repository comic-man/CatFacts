import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Your main component
import {provideHttpClient, withFetch} from '@angular/common/http'; // Correct modern module
import { CatFactService } from './app/cat-fact.service'; // Service to handle API calls

// Bootstrapping the standalone application
bootstrapApplication(AppComponent, {
  providers: [
    CatFactService,
    provideHttpClient(
      withFetch()
    )// Register the service
  ],

}).catch(err => console.error(err));
