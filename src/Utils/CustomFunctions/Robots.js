// C:\BOOSTUP\NETFLIXTUNISIE\CLEAN\Frontend\src\Utils\CustomFunctions\Robots.js

export const generateRobotsTxt = () => {
    return `User-agent: *
  Disallow: /api/
  Allow: /`;
  };
  
  // If you want to handle the generation of the `robots.txt` in some other part of your app
  // You can import this function and use it in an API route or any other place
  