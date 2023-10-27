import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MplanRoutingModule } from './mplan-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { GrTranslateModule } from 'src/app/translate';
import { ModalsModule } from '../../modals/modals.module';
import { MplanDictionaryService } from './mplan-main/services/mplan-dictionary.service';
import { MplanMainComponent } from './mplan-main/mplan-main.component';
import { PayerFormComponent } from './mplan-main/components/payer-form/payer-form.component';
import { CountryFormComponent } from './mplan-main/components/country-form/country-form.component';
import { FeedbackFormComponent } from './mplan-main/components/feedback-form/feedback-form.component';
import { FooterComponent } from './mplan-main/components/footer/footer.component';
import { LoadFormComponent } from './mplan-main/components/load-form/load-form.component';
import { MplanActionButtonsComponent } from './mplan-main/components/mplan-action-buttons/mplan-action-buttons.component';
import { MplanHeaderComponent } from './mplan-main/components/mplan-header/mplan-header.component';
import { MainHeaderComponent } from './mplan-main/components/main-header/main-header.component';

@NgModule({
  declarations: [
    MplanMainComponent,
    PayerFormComponent,
    CountryFormComponent,
    FeedbackFormComponent,
    FooterComponent,
    LoadFormComponent,
    MplanActionButtonsComponent,
    MplanHeaderComponent,
    MainHeaderComponent

  ],
  imports: [
    CommonModule,
    MplanRoutingModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    GrTranslateModule.forRoot(),
    
  ]
})
export class MplanModule { }
