import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgeComponent,
        BodyAcheComponent,
        ChillsComponent,
        CortisolComponent,
        CoughComponent,
        CrossborderTravelComponent,
        DiabetesComponent,
        DiarrheaComponent,
        FeverComponent,
        FeverDurationComponent,
        FeverTemperatureComponent,
        FluShotComponent,
        GeneraltravelComponent,
        HeadAcheComponent,
        HeartDiseaseComponent,
        ImmunSuppressivaComponent,
        ListlessComponent,
        LungDiseaseComponent,
        NrwTravelReturnComponent,
        NrwtravelComponent,
        ObesityComponent,
        PregnancyComponent,
        RiskyContactComponent,
        RiskyContactDateComponent,
        RiskyTravelComponent,
        ShortBreathComponent,
        SoreThroatComponent,
        SituationComponent,
        SmokingComponent,
        SniffComponent,
        SymptomsDurationComponent,
        SuspectContactComponent,
        SuspectContactDateComponent,
        WorkComponent } from '.';
import {QuestionPage} from './question';

const routes: Routes = [
  {
    path: '',
    component: QuestionPage,
    children: [
      {
        path: 'factors-age',
        component: AgeComponent
      },
      {
        path: 'symptoms-body',
        component: BodyAcheComponent
      },
      {
        path: 'symptoms-chills',
        component: ChillsComponent
      },
      {
        path: 'factor-cortisol',
        component: CortisolComponent
      },
      {
        path: 'symptoms-cough',
        component: CoughComponent
      },
      {
        path: 'travel-crossborder',
        component: CrossborderTravelComponent
      },
      {
        path: 'symptom-diabetes',
        component: DiabetesComponent
      },
      {
        path: 'symptom-diarrhea',
        component: DiarrheaComponent
      },
      {
        path: 'symptom-fever',
        component: FeverComponent
      },
      {
        path: 'symptom-fever-duration',
        component: FeverDurationComponent
      },
      {
        path: 'symptom-fever-temperature',
        component: FeverTemperatureComponent
      },
      {
        path: 'factor-flushot',
        component: FluShotComponent
      },
      {
        path: 'travel',
        component: GeneraltravelComponent
      },
      {
        path: 'symptom-head',
        component: HeadAcheComponent
      },
      {
        path: 'factor-heart',
        component: HeartDiseaseComponent
      },
      {
        path: 'factor-immunesuppressive',
        component: ImmunSuppressivaComponent
      },
      {
        path: 'symptoms-listless',
        component: ListlessComponent
      },
      {
        path: 'factor-lungs',
        component: LungDiseaseComponent
      },
      {
        path: 'travel-nrw-return',
        component: NrwTravelReturnComponent
      },
      {
        path: 'travel-nrw',
        component: NrwtravelComponent
      },
      {
        path: 'factor-obesity',
        component: ObesityComponent
      },
      {
        path: 'factor-pregnancy',
        component: PregnancyComponent
      },
      {
        path: 'transfer-contact',
        component: RiskyContactComponent
      },
      {
        path: 'transfer-contact-since',
        component: RiskyContactDateComponent
      },
      {
        path: 'suspect-contact',
        component: SuspectContactComponent
      },
      {
        path: 'suspect-contact-date',
        component: SuspectContactDateComponent
      },
      {
        path: 'travel-countries',
        component: RiskyTravelComponent
      },
      {
        path: 'symptom-breath',
        component: ShortBreathComponent
      },
      {
        path: 'symptom-throat',
        component: SoreThroatComponent
      },
      {
        path: 'factors-situation',
        component: SituationComponent
      },
      {
        path: 'factors-smoking',
        component: SmokingComponent
      },
      {
        path: 'symptom-sniff',
        component: SniffComponent
      },
      {
        path: 'symptom-duration',
        component: SymptomsDurationComponent
      },
      {
        path: 'factor-work',
        component: WorkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
