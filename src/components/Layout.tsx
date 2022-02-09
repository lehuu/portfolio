import * as React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  title: string;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <html lang="en" />
      </Helmet>
      <header>
        <nav>dummy nav component</nav>
      </header>
      <main>{children}</main>
      <footer>dummy footer</footer>
    </div>
  );
};
