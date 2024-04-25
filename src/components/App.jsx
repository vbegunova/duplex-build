import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const AboutCompany = lazy(() => import('../pages/AboutCompany'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Blog = lazy(() => import('../pages/Blog'));
const Article = lazy(() => import('../pages/Article'));
const AreaCatalog = lazy(() => import('../pages/AreaCatalog'));
const Object = lazy(() => import('../pages/Object'));
const Thanks = lazy(() => import('../pages/Thanks'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<Article />} />
          <Route path="/area-catalog" element={<AreaCatalog />} />
          <Route path="/object" element={<Object />} />
          <Route path="/thanks" element={<Thanks />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
