const staticPaths = new Set(["/_headers","/docs/ClaudioMonguzzi.pdf","/favicon.ico","/fonts/poppins-400.woff2","/fonts/poppins-500.woff2","/fonts/poppins-700.woff2","/icons/bootstrap.svg","/icons/c++.svg","/icons/csharp.svg","/icons/css.svg","/icons/download.svg","/icons/facebook-auth.svg","/icons/facebook.svg","/icons/git.svg","/icons/github.svg","/icons/gmail.svg","/icons/google-auth.svg","/icons/graphql.svg","/icons/handlebars.svg","/icons/html5.svg","/icons/instagram.svg","/icons/javascript.svg","/icons/laravel.svg","/icons/linkedin.svg","/icons/mongodb.svg","/icons/mysql.svg","/icons/nestjs.svg","/icons/net.svg","/icons/nextjs.svg","/icons/node.svg","/icons/nodejs.svg","/icons/php.svg","/icons/postgresql.svg","/icons/qwik.svg","/icons/react.svg","/icons/send.svg","/icons/show.svg","/icons/sqlserver.svg","/icons/tailwindcss.svg","/icons/typescript.svg","/icons/website.svg","/imgs/empty-image.svg","/imgs/preview.webp","/lottie/about.json","/lottie/contact.json","/lottie/hero.json","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };