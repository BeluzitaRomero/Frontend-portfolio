import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/experiencia-educacion/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/experiencia-educacion/edit-experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/experiencia-educacion/nueva-educacion/nueva-educacion.component';
import { NuevaExperienciaComponent } from './components/experiencia-educacion/nueva-experiencia/nueva-experiencia.component';
import { EditHeaderComponent } from './components/header/edit-header/edit-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { NuevaSkillComponent } from './components/skill/nueva-skill/nueva-skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexperiencia', component: NuevaExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaeducacion', component: NuevaEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'nuevaskill', component: NuevaSkillComponent },
  { path: 'edit-datospersonales/:id', component: EditHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
