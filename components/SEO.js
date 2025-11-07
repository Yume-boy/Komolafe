import Head from 'next/head';

export default function SEO({
  title = 'Marvellous Komolafe | Frontend Developer & Cybersecurity Enthusiast',
  description = 'B.Sc. Biochemistry graduate turned Frontend Developer skilled in React, Tailwind, and Bootstrap. Cybersecurity enthusiast specializing in PenTesting and GRC. Enhancing user experience through seamless UI.',
  keywords = 'Frontend Developer, React Developer, Tailwind CSS, Cybersecurity, PenTesting, GRC, Web Development, UI/UX, JavaScript, Portfolio',
  ogImage = '/og-image.jpg',
  url = 'https://komolafe.vercel.app/',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Marvellous Komolafe" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Marvellous Komolafe Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />

      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Head>
  );
}
