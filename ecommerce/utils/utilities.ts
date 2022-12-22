export const shimmer = (w: number | undefined, h: number | undefined) => `
<svg width="${w ?? "100%"}" height="${
  h ?? "100%"
}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w ?? "100%"}" height="${h ?? "100%"}" fill="#333" />
  <rect id="r" width="${w ?? "100%"}" height="${h ?? "100%"}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w ?? "100%"}" to="${
  w ?? "100%"
}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const loaderImage = ({ src = "", width = "", quality = "" }) => {
  return `${process.env.NEXT_PUBLIC_DOMAIN || ""}${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const blurDataURL = (
  width?: number | undefined,
  height?: number | undefined,
) => `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;


export const getPages = (totalPosts: number, postsPerPage: number) => {
  return Array.from(
    { length: totalPosts / postsPerPage },
    (_, i) => i + 1,
  );
}