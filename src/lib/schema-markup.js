export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Dhruv Pal",
      "jobTitle": "Fullstack Developer and Python Developer",
      "worksFor": { "@type": "Organization", "name": "Freelancer" },
      "sameAs": [
        "https://www.linkedin.com/in/dhruv-pal-432a83291/",
        "https://github.com/dhruvpal102005",
        "https://www.instagram.com/dhruvpal_2310/"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Dhruv Pal - Personal Website",
      "url": "https://dhruvpal102005.github.io/portfolio/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dhruvpal102005.github.io/portfolio/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dhruvpal102005.github.io/portfolio/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://dhruvpal102005.github.io/portfolio/about" },
        { "@type": "ListItem", "position": 3, "name": "Skillset", "item": "https://dhruvpal102005.github.io/portfolio/skillset" },
        { "@type": "ListItem", "position": 4, "name": "Experience", "item": "https://dhruvpal102005.github.io/portfolio/experience" },
        { "@type": "ListItem", "position": 5, "name": "Services", "item": "https://dhruvpal102005.github.io/portfolio/services" },
        { "@type": "ListItem", "position": 6, "name": "Portfolio", "item": "https://dhruvpal102005.github.io/portfolio/portfolio" },
        { "@type": "ListItem", "position": 7, "name": "Blog", "item": "https://dhruvpal102005.github.io/portfolio/blog" },
        { "@type": "ListItem", "position": 8, "name": "Contact", "item": "https://dhruvpal102005.github.io/portfolio/contact" },
        { "@type": "ListItem", "position": 9, "name": "Guestbook", "item": "https://dhruvpal102005.github.io/portfolio/guestbook" }
      ]
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "url": "https://dhruvpal102005.github.io/portfolio/" },
        { "@type": "ListItem", "position": 2, "name": "About", "url": "https://dhruvpal102005.github.io/portfolio/about" },
        { "@type": "ListItem", "position": 3, "name": "Skillset", "url": "https://dhruvpal102005.github.io/portfolio/skillset" },
        { "@type": "ListItem", "position": 4, "name": "Experience", "url": "https://dhruvpal102005.github.io/portfolio/experience" },
        { "@type": "ListItem", "position": 5, "name": "Services", "url": "https://dhruvpal102005.github.io/portfolio/services" },
        { "@type": "ListItem", "position": 6, "name": "Portfolio", "url": "https://dhruvpal102005.github.io/portfolio/portfolio" },
        { "@type": "ListItem", "position": 7, "name": "Blog", "url": "https://dhruvpal102005.github.io/portfolio/blog" },
        { "@type": "ListItem", "position": 8, "name": "Contact", "url": "https://dhruvpal102005.github.io/portfolio/contact" },
        { "@type": "ListItem", "position": 9, "name": "Guestbook", "url": "https://dhruvpal102005.github.io/portfolio/guestbook" }
      ]
    }
  ]
};
