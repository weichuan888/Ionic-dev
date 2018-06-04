import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// Boot
import { MyApp } from './app.component';

//Page
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


//Component
import { TitlePartialComponent } from '../components/title-partial/title-partial';

// Provider
import { DataProvider } from '../providers/data/data';
import { ListPartialComponent } from '../components/list-partial/list-partial';
import { Camera } from '@ionic-native/camera';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TitlePartialComponent,
    ListPartialComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Camera
  ]
})
export class AppModule {}
