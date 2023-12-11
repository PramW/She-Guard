import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'setup',
    loadComponent: () =>
      import('./pages/setup/setup.page').then((m) => m.SetupPage),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then(
        (m) => m.OnboardingPage
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password.page').then(
        (m) => m.ForgotPasswordPage
      ),
  },
  {
    path: 'verification-email',
    loadComponent: () =>
      import('./pages/verification-email/verification-email.page').then(
        (m) => m.VerificationEmailPage
      ),
  },
  {
    path: 'new-password',
    loadComponent: () =>
      import('./pages/new-password/new-password.page').then(
        (m) => m.NewPasswordPage
      ),
  },
];
