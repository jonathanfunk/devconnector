import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} DevConnector. Developed by{' '}
      <a className="text-white" href="http://www.jon-funk.com" target="_blank">
        Jonathan Funk
      </a>
      .
    </footer>
  );
};
