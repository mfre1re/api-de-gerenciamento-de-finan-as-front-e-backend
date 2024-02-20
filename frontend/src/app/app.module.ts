import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { EntryDataComponent } from './entry-data/entry-data.component';
import { TransactionDataComponent } from './transaction-data/transaction-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtraTransactionComponent } from './pagination-transaction/pagination-transaction.component';
import { FunctionTransactionComponent } from './function-transaction/function-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryDataComponent,
    TransactionDataComponent,
    ExtraTransactionComponent,
    FunctionTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
