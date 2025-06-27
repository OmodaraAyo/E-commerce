import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block", textAlign: "center" }}
         data-ad-client="ca-pub-7585686888419372"
         data-ad-slot="8653836829"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default AdBanner;
