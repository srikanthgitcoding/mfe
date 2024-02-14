import React, { useRef, useEffect } from "react";
import { mount } from "marketing/marketingApp";

const RemoteMarketingApp = () => {
  const first = useRef(null);
  useEffect(() => {
    mount(first.current);
  }, []);

  return <div ref={first}></div>;
};

export default RemoteMarketingApp;
