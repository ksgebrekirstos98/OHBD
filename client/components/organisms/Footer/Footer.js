import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            {`Open Hearts Big Dreams`}
          </p>
        </div>
      </div>
    </footer>
  );
}
