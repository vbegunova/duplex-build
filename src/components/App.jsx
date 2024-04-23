import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const AboutCompany = lazy(() => import('../pages/AboutCompany'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Blog = lazy(() => import('../pages/Blog'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
