import React, { useEffect, useRef } from "react";
import QRCodeStyling from "..";

export default {
  title: "QRCode"
};

export const Basic = (): JSX.Element => {
  const rootRef = useRef<HTMLDivElement>(null);

  const options = {
    width: 300,
    height: 300,
    data: "h"
  };

  useEffect(() => {
    const qrCode = new QRCodeStyling(options);
    if (rootRef.current) {
      qrCode.append(rootRef.current);
    }
  }, []);

  return <div ref={rootRef}></div>;
};

export const Border = (): JSX.Element => {
  const rootRef = useRef<HTMLDivElement>(null);

  const options = {
    width: 300,
    height: 300,
    data: "h",
    margin: 10,
    border: {
      width: 14
    }
  };

  useEffect(() => {
    const qrCode = new QRCodeStyling(options);
    if (rootRef.current) {
      qrCode.append(rootRef.current);
    }
  }, []);

  return <div ref={rootRef}></div>;
};
