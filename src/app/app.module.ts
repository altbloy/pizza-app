import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';
import { PizzaPanelComponent } from './pages/pizza-list/components/pizza-panel/pizza-panel.component';
import { ApiService } from './services/api-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketService } from './services/basket.service';
import { SharedModule } from './shared/modules/shared/shared.module';
import { SearchComponent } from './pages/pizza-list/components/search/search.component';
import { BasketGuard } from './guardians/basket.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaPanelComponent,
    SearchComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ApiService, BasketService,BasketGuard],
  bootstrap: [AppComponent],
  exports: [PizzaPanelComponent, SearchComponent]
})
export class AppModule { }
