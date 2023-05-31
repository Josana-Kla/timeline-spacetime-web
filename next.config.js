/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'], // precisa falar o domínio que o next precisa pegar sua imagem pois ele não carrega imagens externas
  },
}

module.exports = nextConfig
