import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name = 'Karshan Ghela', type = 'website' }) {
  const siteUrl = 'https://karshanghela.co.in/';
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={window.location.href} />

      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Karshan Ghela",
          "url": siteUrl,
          "logo": `${siteUrl}logo.png`,
          "sameAs": [
             "" // Add social profiles here if available
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-1234567890", // Placeholder, should be updated if real number exists
            "contactType": "Customer Service"
          }
        })}
      </script>
    </Helmet>
  );
}
