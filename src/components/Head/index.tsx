import useSiteMetadata from '@hooks/useSiteMetadata';
import React from 'react';

interface HeadProps {
  additionalTitle?: string;
  pathname: string;
}

const Head: React.FunctionComponent<HeadProps> = ({ additionalTitle, pathname }) => {
  const { name, lang, siteUrl, description, image } = useSiteMetadata();

  const imageUrl = `${siteUrl}${image}`;
  const path = `${siteUrl}${pathname}`;

  return (
    <>
      <title>
        {name}
        {additionalTitle ? ` - ${additionalTitle}` : ''}
      </title>
      <html lang={lang} />
      <meta charSet="utf-8" />
      <link rel="canonical" href={path} />
      <meta name="description" content={description} />

      <meta name="image" content={imageUrl} />

      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={path} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default Head;
