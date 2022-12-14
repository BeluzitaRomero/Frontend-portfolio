import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { LoginComponent } from './components/login/login.component';
import { LogrosComponent } from './components/logros/logros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { interceptorProvider } from './services/interceptor-service.service';
import { NuevaExperienciaComponent } from './components/experiencia-educacion/nueva-experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-educacion/edit-experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/experiencia-educacion/nueva-educacion/nueva-educacion.component';
import { EditEducacionComponent } from './components/experiencia-educacion/edit-educacion/edit-educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { NuevaSkillComponent } from './components/skill/nueva-skill/nueva-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditHeaderComponent } from './components/header/edit-header/edit-header.component';
import { NuevoProyectoComponent } from './components/logros/nuevo-proyecto/nuevo-proyecto.component';
import { EditProyectoComponent } from './components/logros/edit-proyecto/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaEducacionComponent,
    LoginComponent,
    LogrosComponent,
    HeaderTopComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    NuevaEducacionComponent,
    EditEducacionComponent,
    SkillComponent,
    NuevaSkillComponent,
    EditSkillComponent,
    EditHeaderComponent,
    NuevoProyectoComponent,
    EditProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
