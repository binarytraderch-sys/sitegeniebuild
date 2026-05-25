import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectsPage from './pages/ProjectsPage';
import AgentChatPage from './pages/AgentChatPage';
import SubscriptionPage from './pages/SubscriptionPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentCancelPage from './pages/PaymentCancelPage';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  /** Accessible without login. Routes without this flag require authentication. Has no effect when RouteGuard is not in use. */
  public?: boolean;
}

export const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
    public: true,
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
    public: true,
  },
  {
    name: 'Register',
    path: '/register',
    element: <RegisterPage />,
    public: true,
  },
  {
    name: 'Payment Success',
    path: '/payment-success',
    element: <PaymentSuccessPage />,
    public: true,
  },
  {
    name: 'Payment Cancel',
    path: '/payment-cancel',
    element: <PaymentCancelPage />,
    public: true,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: <ProjectsPage />,
  },
  {
    name: 'Agent Chat',
    path: '/dashboard/chat',
    element: <AgentChatPage />,
  },
  {
    name: 'Subscription',
    path: '/dashboard/subscription',
    element: <SubscriptionPage />,
  },
];
