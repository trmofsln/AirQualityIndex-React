import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

const NavBar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Air Quality Index</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#feature" title="Services" />
            <Link href="#about" title="About" />
          
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#feature" title="Services" />
              <Link href="#about" title="About" />
              {/* <Link href="#works" title="How it works" /> */}
              {/* <Link href="#faq" title="FAQ" /> */}
              {/* <Link href="#pricing" title="Pricing" /> */}
              <Link href="#contact" title="ContactUs" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
