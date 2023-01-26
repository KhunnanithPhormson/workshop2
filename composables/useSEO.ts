// priority: title > description > keywords > image > author > og > twitter > article
export const useSEO = (obj: {
  title: any;
  description?: any;
  keywords?: any;
  image?: any;
  author?: any;
  og?: {
    title?: any;
    description?: any;
    image?: any;
    siteName?: any;
    type?: any;
    url?: any;
  };
  twitter?: {
    title?: any;
    description?: any;
    image?: any;
    card?: any;
    site?: any;
    creator?: any;
  };
  article?: {
    publishedTime?: any;
    author?: any;
  };
}) => {
  const seo = {
    title: obj.title,
    meta: [
      {
        name: 'description',
        content: obj.description,
      },
      {
        name: 'author',
        content: obj.author,
      },
      {
        name: 'keywords',
        content: obj.keywords,
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: obj.title,
      },
      {
        property: 'og:description',
        content: obj.og?.description || obj.description,
      },
      {
        property: 'og:image',
        content: obj.og?.image || obj.image || '/og-image.jpg',
      },
      {
        property: 'og:type',
        content: obj.og?.type || 'website',
      },
      {
        property: 'og:site_name',
        content: obj.og?.siteName,
      },
      {
        property: 'og:url',
        content: obj.og?.url,
      },

      // twitter
      {
        property: 'twitter:title',
        content: obj.twitter?.title || obj.og?.title || obj.title,
      },
      {
        property: 'twitter:description',
        content:
          obj.twitter?.description || obj.og?.description || obj.description,
      },
      {
        property: 'twitter:image',
        content:
          obj.twitter?.image || obj.og?.image || obj.image || '/og-image.jpg',
      },
      {
        property: 'twitter:card',
        content: obj.twitter?.card || 'summary_large_image',
      },
      {
        property: 'twitter:site',
        content: obj.twitter?.site,
      },
      {
        property: 'twitter:creator',
        content: obj.twitter?.creator,
      },
      {
        property: 'article:published_time',
        content: obj.article?.publishedTime,
      },
      {
        property: 'article:author',
        content: obj.article?.author,
      },
    ],
  };

  // remove title if it's undefined
  if (seo.title === undefined) {
    delete seo.title;
  }

  // remove meta if it's undefined
  seo.meta = seo.meta.filter((item) => item.content !== undefined);

  useHead(seo);
};
