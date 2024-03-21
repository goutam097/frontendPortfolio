import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'blog-list',
    loadChildren: () => import('./pages/blog/blog-list/blog-list.module').then( m => m.BlogListPageModule)
  },
  {
    path: 'blog-details/:id',
    loadChildren: () => import('./pages/blog/blog-details/blog-details.module').then( m => m.BlogDetailsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'admin-blog-list',
    loadChildren: () => import('./pages/admin/blog/admin-blog-list/admin-blog-list.module').then( m => m.AdminBlogListPageModule)
  },
  {
    path: 'admin-blog-create/:type',
    loadChildren: () => import('./pages/admin/blog/admin-blog-create/admin-blog-create.module').then( m => m.AdminBlogCreatePageModule)
  },
  {
    path: 'admin-blog-create/:type/:id',
    loadChildren: () => import('./pages/admin/blog/admin-blog-create/admin-blog-create.module').then( m => m.AdminBlogCreatePageModule)
  },
  {
    path: 'admin-about-list',
    loadChildren: () => import('./pages/admin/about/admin-about-list/admin-about-list.module').then( m => m.AdminAboutListPageModule)
  },
  {
    path: 'admin-about-create/:type',
    loadChildren: () => import('./pages/admin/about/admin-about-create/admin-about-create.module').then( m => m.AdminAboutCreatePageModule)
  },
  
  {
    path: 'admin-about-create/:type/:id',
    loadChildren: () => import('./pages/admin/about/admin-about-create/admin-about-create.module').then( m => m.AdminAboutCreatePageModule)
  },
  {
    path: 'admin-testimonial-list',
    loadChildren: () => import('./pages/admin/testimonial/admin-testimonial-list/admin-testimonial-list.module').then( m => m.AdminTestimonialListPageModule)
  },
  {
    path: 'admin-testimonial-create/:type',
    loadChildren: () => import('./pages/admin/testimonial/admin-testimonial-create/admin-testimonial-create.module').then( m => m.AdminTestimonialCreatePageModule)
  },
  {
    path: 'admin-testimonial-create/:type/:id',
    loadChildren: () => import('./pages/admin/testimonial/admin-testimonial-create/admin-testimonial-create.module').then( m => m.AdminTestimonialCreatePageModule)
  },
  {
    path: 'admin-personal-details-list',
    loadChildren: () => import('./pages/admin/personalDetails/admin-personal-details-list/admin-personal-details-list.module').then( m => m.AdminPersonalDetailsListPageModule)
  },
  {
    path: 'admin-personal-details-create/:type',
    loadChildren: () => import('./pages/admin/personalDetails/admin-personal-details-create/admin-personal-details-create.module').then( m => m.AdminPersonalDetailsCreatePageModule)
  },
  {
    path: 'admin-personal-details-create/:type/:id',
    loadChildren: () => import('./pages/admin/personalDetails/admin-personal-details-create/admin-personal-details-create.module').then( m => m.AdminPersonalDetailsCreatePageModule)
  },
  {
    path: 'admin-service-list',
    loadChildren: () => import('./pages/admin/service/admin-service-list/admin-service-list.module').then( m => m.AdminServiceListPageModule)
  },
  {
    path: 'admin-service-create/:type',
    loadChildren: () => import('./pages/admin/service/admin-service-create/admin-service-create.module').then( m => m.AdminServiceCreatePageModule)
  },
  {
    path: 'admin-service-create/:type/:id',
    loadChildren: () => import('./pages/admin/service/admin-service-create/admin-service-create.module').then( m => m.AdminServiceCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
