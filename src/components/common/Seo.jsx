import { useEffect } from "react";

export default function Seo({
  title = "W R Enterprises",
  description = "Hardware, plumbing, electrical, paints and industrial solutions.",
}) {
  useEffect(() => {
    const fullTitle = `${title} | W R Enterprises`;

    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(
          attr,
          selector.includes("property=")
            ? selector.match(/property="([^"]+)"/)[1]
            : selector.match(/name="([^"]+)"/)[1],
        );
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", fullTitle);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[name="twitter:title"]', "name", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", description);
  }, [title, description]);

  return null;
}
