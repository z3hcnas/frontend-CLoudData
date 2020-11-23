import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DataComponent } from './components/data/data.component';
import { FileComponent } from './components/file/file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { CreateDirComponent } from './components/create-dir/create-dir.component';
import { LinkComponent } from './components/link/link.component';
import { HomeComponent } from './components/home/home.component';




const appRoutes: Routes = [
  {path: 'cloudData/:dir', component: DataComponent},
  {path: 'archivo/:path/:file', component: FileComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: 'crearCarpeta/:dir', component: CreateDirComponent},
  {path: 'link/:link', component: LinkComponent},
  {path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
