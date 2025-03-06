import React from 'react';
import '../styles/Home.css';
import Aos from 'aos';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
  className="hero-section text-center py-5 "data-aos="fade-down"
  style={{
    background: 'linear-gradient(135deg, #2C3E50, #4CA1AF)',
    color: 'white',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif"
  }}
>
  <div className="container">
    <h1
      className="display-2 fw-bold mb-4"
      style={{
        letterSpacing: '2px',
        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
        animation: 'fadeInUp 1s ease-in-out'
      }}
    >
      Welcome to Galvanx Technology
    </h1>

    <p
      className="lead mb-4"
      style={{
        fontSize: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
        opacity: 0.9,
        animation: 'fadeInUp 1.5s ease-in-out'
      }}
    >
      Innovating IT Services, Professional Training, and Transcription Solutions Worldwide
    </p>

    <button
      className="btn btn-outline-light btn-lg mt-3"
      style={{
        borderRadius: '30px',
        padding: '12px 30px',
        transition: 'transform 0.3s',
      }}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
    >
      Discover More
    </button>
  </div>
  </section>

      {/* About Us */}
      <section id="about" className="section" data-aos="fade-up" >
  <div className="container">
    <div className="about-content p-4 p-md-5">
      <h2 className="section-title text-center">About Us</h2>
      <p className="section-text">
          
            Galvanx Technology is a young Indian company specializing in <strong>IT-enabled services</strong>, including KPO services, Call Center services, Web Designing, and Web-related outsourcing services. Our global reach extends to the <strong>USA, Australia, South Africa, and European countries</strong>. We offer time-bound, qualitative, and cost-effective Inventory Transcription services to inventory companies, independent inventory clerks, landlords, and other businesses. With a team of <strong>60+ skilled transcriptionists</strong>, we can seamlessly scale to meet both small and large project requirements.
          </p>

          <p className="section-text">
            In addition to our core services, Galvanx Technology provides comprehensive <strong>professional IT training</strong>. We offer a variety of value-based courses in Software, Hardware, Networking, Multimedia, and Web Technologies. Our training programs focus on enhancing students' skills and equipping them to meet industry demands. These programs are specifically designed for <strong>Colleges and Schools</strong>, making advanced technology education accessible to all students.
          </p>

          <p className="section-text">
            We provide career-oriented training in Website Designing, Application Development (.Net, Java), and emerging Web Application languages like Perl, Ruby on Rails, and PHP. Our additional specialized courses include <strong>Hardware & Networking (CCNA)</strong>, Software Quality Assurance (SQA), and Information Security (IS). Our team comprises certified professionals from top-tier companies such as <strong>Microsoft and CISCO</strong>, offering real-world expertise and dedicated placement assistance to prepare students for successful careers.
          </p>
        </div>
      </div>
      </section>

      {/* Services Section */}
      <section className="py-5" style={{ backgroundColor: '#F8F9FA' }} data-aos="fade-up">
        <div className="container">

          <h2 className="text-center mb-5 text-secondary">Our Core Services</h2>
          <div className="row g-4">
            {[
              { title: 'Inventory Transcription', description: 'Accurate and timely transcription for businesses of all sizes.' },
              { title: 'Web Development', description: 'Building modern, responsive websites with cutting-edge technology.' },
              { title: 'Call Center Services', description: 'Delivering premium customer support and BPO solutions globally.' },
              {title: 'Data Entry', description:'Accurate and timely data entry services for businesses of all sizes.'},
          
              {title:'Hardware Servicing' ,description:'quality solution with quality products for all companies'}



            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 rounded-4 shadow-sm text-center p-4">
                  <h4 className="text-primary">{service.title}</h4>
                  <p>{service.description}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-5"  data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 text-secondary">Professional IT Training</h2>
          <p className="text-center">Empowering the next generation with skills in emerging technologies. Our training programs include:</p>
          <div className="row g-4 mt-4">
            {[
              { title: 'Web Technologies', description: 'Learn HTML, CSS, JavaScript, PHP, Ruby on Rails, and more.' },
              { title: 'Networking & Security', description: 'Master CCNA, Information Security, and advanced networking.' },
              { title: 'Application Development', description: 'Get hands-on with .NET, Java, and cutting-edge platforms.' }
            ].map((program, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 rounded-4 shadow-sm text-center p-4">
                  <h4 className="text-primary">{program.title}</h4>
                  <p>{program.description}</p>
                  <button className="btn btn-outline-primary">Explore More</button>
                </div>
              </div>
            ))}
          </div>






        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4" style={{ backgroundColor: '#2C3E50', color: 'white' }} >
        <div className="container text-center">
          <p>&copy; 2025 Galvanx Technology | Innovating the Future of IT</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
