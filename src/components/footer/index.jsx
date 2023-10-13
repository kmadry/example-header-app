import React from 'react';
import Button from '@mui/material/Button';

const Footer = ({date, click}) => {
  return (
    <div className="FooterApp">
      <div>Footer {date}</div>
      <Button variant="contained" onClick={click}>Do it!</Button>
    </div>
  );
};

export default Footer;
