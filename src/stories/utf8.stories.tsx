import React, { useEffect, useRef } from "react";
import QRCodeStyling from "..";

export default {
  title: "utf8"
};

export const Chinese = (): JSX.Element => {
  const rootRef = useRef<HTMLDivElement>(null);

  const options = {
    width: 300,
    height: 300,
    data: "你好世界"
  };

  useEffect(() => {
    const qrCode = new QRCodeStyling(options);
    if (rootRef.current) {
      qrCode.append(rootRef.current);
    }
  }, []);

  return <div ref={rootRef}></div>;
};

export const Russian = (): JSX.Element => {
  const rootRef = useRef<HTMLDivElement>(null);

  const options = {
    width: 300,
    height: 300,
    data: "Русский"
  };

  useEffect(() => {
    const qrCode = new QRCodeStyling(options);
    if (rootRef.current) {
      qrCode.append(rootRef.current);
    }
  }, []);

  return <div ref={rootRef}></div>;
};
