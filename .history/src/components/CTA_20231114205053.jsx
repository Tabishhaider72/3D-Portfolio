import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      Got a developer gap in your team? <br className='sm:block hidden' />
      Let's collaborate and craft something extraordinary together! 
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
