import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us - Karshan Ghela | Visit Our Store"
        description="Get in touch with Karshan Ghela. Visit our store in Navsari or contact us for authentic Indian spices and traditional grinding services."
      />
      <Contact title="Contact Us" map={true} showStoreFront={true} />
    </>
  );
}
