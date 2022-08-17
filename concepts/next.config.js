/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  //redirect perment or temp.
  redirects:async()=>{
    return [
      {
        source:"/about",
        destination:"/",
        permanent:true
      },
    ]
  },
}

module.exports = nextConfig
