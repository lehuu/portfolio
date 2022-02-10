import * as React from 'react';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage = () => (
  <main style={pageStyles}>
    <title>Phuoc Le</title>
    <h1 style={headingStyles}>Currently under maintenance</h1>
  </main>
);

export default IndexPage;
