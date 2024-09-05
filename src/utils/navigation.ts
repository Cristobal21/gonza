// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Seguros", url: "/products" },
  // { name: "Servicios", url: "/services" },
  // { name: "Nosotros", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  // {
  //   section: "Ecosystem",
  //   links: [
  //     { name: "Documentation", url: "/welcome-to-docs/" },
  //     { name: "Tools & Equipment", url: "/products" },
  //     { name: "Construction Services", url: "/services" },
  //   ],
  // },
  {
    section: "Empresa",
    links: [
      { name: "Sobre nuestra empresa", url: "#" },
      // { name: "Blog", url: "/blog" },
      { name: "Trabaja con nosotros", url: "/contact" },
      { name: "Nuestros clientes", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};