import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1
        style={{
          color: 'green',
          fontSize: '40px',
          textAlign: 'center',
          '@media (max-width: 768px)': {
            fontSize: '30px',
          },
          '@media (max-width: 480px)': {
            fontSize: '25px',
          },
        }}
      >
        Contact Us
      </h1>
      <p
        style={{
          color: 'gray',
          fontSize: '20px',
          textAlign: 'center',
          '@media (max-width: 768px)': {
            fontSize: '18px',
          },
          '@media (max-width: 480px)': {
            fontSize: '15px',
          },
        }}
      >
        We'd love to hear from you. Whether you have a question, a suggestion, or just
        want to say hi, we're here to help.
      </p>
      <div className="contact-details">
        <h2
          style={{
            color: 'gray',
            fontSize: '25px',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: '20px',
            },
            '@media (max-width: 480px)': {
              fontSize: '18px',
            },
          }}
        >
          TheatreTonic
        </h2>
        <p
          style={{
            color: 'gray',
            fontSize: '18px',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}
        >
          123 Main St, Anytown, USA 12345
        </p>
        <p
          style={{
            color: 'gray',
            fontSize: '18px',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}
        >
          <a href="mailto:info@theatretonic.com" style={{ color: 'gray' }}>
            info@theatretonic.com
          </a>
        </p>
        <p
          style={{
            color: 'gray',
            fontSize: '18px',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}
        >
          (555) 555-5555
        </p>
        <p
          style={{
            color: 'gray',
            fontSize: '18px',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}
        >
<a href="https://www.facebook.com/theatretonic" target="_blank" rel="noreferrer" style={{ color: 'gray' }}>
  Facebook
</a><hr/>
<a href="https://www.twitter.com/theatretonic" target="_blank" rel="noreferrer" style={{ color: 'gray' }}>
  Twitter
</a><hr/>
<a href="https://www.instagram.com/theatretonic" target="_blank" rel="noreferrer" style={{ color: 'gray' }}>
  Instagram
</a><hr/>
<a href="https://www.linkedin.com/company/theatretonic" target="_blank" rel="noreferrer" style={{ color: 'gray' }}>
  LinkedIn
</a><hr/>
        </p>
      </div>
    </div>
  );
};

export default Contact;