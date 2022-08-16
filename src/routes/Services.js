import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <h2>Services page</h2>

      <Link to="/web-design">Web design</Link>
      <Link to="/seo">Seo</Link>
    </>
  );
};

export default Services;
