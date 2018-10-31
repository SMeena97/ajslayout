import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
 
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
	ContentComponent
    
  ],
  imports: [
    BrowserModule,
    rootRouting
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }