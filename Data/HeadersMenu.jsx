import paris from '../public/assets/images/themes/01.jpg';
import tokyo from '../public/assets/images/themes/02.jpg';
import osaka from '../public/assets/images/themes/03.jpg';
import rome from '../public/assets/images/themes/04.jpg';
import madrid from '../public/assets/images/themes/05.jpg';
import berlin from '../public/assets/images/themes/06.jpg';
import denver from '../public/assets/images/themes/07.jpg';
import commingSoon from '../public/assets/images/themes/08.jpg';

export const headerMenu = [
  {
    id: 1,
    title: 'Accueil',
    path: '/',

  },
  // {
  //   id: 2,
  //   title: 'À propos',
  //   type: 'link',
  //   path: '/about-us',
  // },
  {
    id: 3,
    title: 'Nos Abonnements',
    styleType: 'link',
    path: '/collections',
    slider: 'product',
    customChildren: true,
    children: [
      {
        column: [
          {
            title: 'Notre Collection',
            type: 'sub',
          },
          {
            title: 'Netflix',
            path: 'collections',
            params: { layout: 'collection_3_grid', category: 'netflix' },
            label: 'Hot',
            labelClass: 'warning-label',
          },
          {
            title: 'Apple TV+',
            path: 'collections',
            params: { layout: 'collection_3_grid', category: 'apple-tv' },
          },
          {
            title: 'Disney+',
            path: 'collections',
            params: { layout: 'collection_3_grid', category: 'disney' },
          },
          {
            title: 'Shahid VIP',
            path: 'collections',
            label: 'New',
            params: { layout: 'collection_3_grid', category: 'shahid-vip' },
          },
          {
            title: 'Prime Video',
            path: 'collections',
            params: { layout: 'collection_3_grid', category: 'prime-video' },
          }
        ],
      },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Product',
  //   styleType: 'link',
  //   slider: 'banner',
  //   customChildren: true,
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: 'ProductPages',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'ProductThumbnail',
  //           path: 'product/abonnement-netflix-essentiel',
  //           params: { layout: 'product_thumbnail' },
  //         },
  //         {
  //           title: 'ProductImages',
  //           path: 'product/abonnement-netflix-essentiel',
  //           params: { layout: 'product_images' },
  //         },
  //         {
  //           title: 'ProductSlider',
  //           path: 'product/abonnement-netflix-essentiel',
  //           params: { layout: 'product_slider' },
  //         },
  //         {
  //           title: 'ProductSticky',
  //           path: 'product/abonnement-netflix-essentiel',
  //           params: { layout: 'product_sticky' },
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'ProductAccordion',
  //           path: 'product/abonnement-netflix-essentiel',
  //           params: { layout: 'product_accordion' },
  //         },
  //         {
  //           title: 'ProductTab',
  //           path: 'product/abonnement-netflix-essentiel',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductFeatures',
  //           colHeadClass: 'custom-mt',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'BundleCrossSale',
  //           path: 'product/abonnement-netflix-essentiel',
  //         },
  //         {
  //           title: 'HotStockProgress',
  //           path: 'product/abonnement-netflix-essentiel',
  //           label: 'New',
  //         },
  //         {
  //           title: 'SoldOut',
  //           path: 'product/abonnement-netflix-essentiel',
  //         },
  //         {
  //           title: 'SaleCountdown',
  //           path: 'product/abonnement-netflix-essentiel',
  //         },
  //         {
  //           title: 'ProductZoom',
  //           path: 'product/abonnement-netflix-essentiel',
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'ProductVariantsStyle',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'VariantRectangle',
  //           path: 'product/abonnement-netflix-essentiel',
  //           type: 'link',
  //         },
  //         {
  //           title: 'VariantCircle',
  //           type: 'link',
  //           path: 'product/abonnement-netflix-essentiel',
  //           label: 'New',
  //         },
  //         {
  //           title: 'VariantImagesWatch',
  //           path: 'product/abonnement-netflix-essentiel',
  //           type: 'link',
  //         }
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'ProductFeatures',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'ProductSimple',
  //           path: 'product/deliciously-sweet-strawberry',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductClassified',
  //           path: 'product/abonnement-netflix-essentiel',
  //           type: 'link',
  //           params: { layout: 'product_thumbnail' },
  //           label: 'New',
  //         },
  //         {
  //           title: 'SizeChart',
  //           type: 'link',
  //           path: 'product/solid-hooded-sweatshirt',
  //           label: 'New',
  //         },
  //         {
  //           title: 'DeliveryAndReturn',
  //           path: 'product/relaxed-fit-hoodie',
  //           type: 'link',
  //         },
  //         {
  //           title: 'PaymentTrustBadges',
  //           path: 'product/delicious-exquisite-cake',
  //           type: 'link',
  //         },
  //         {
  //           title: 'AskAnExpert',
  //           path: 'product/premium-blazer',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductFeatures',
  //           colHeadClass: 'custom-mt',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'ProductTags',
  //           path: 'product/solid-hooded-sweatshirt',
  //           type: 'link',
  //         },
  //         {
  //           title: 'ProductInformation',
  //           path: 'product/solid-cotton-tshirts',
  //           type: 'link',
  //         },
  //         {
  //           title: 'SocialShare',
  //           type: 'link',
  //           path: 'product/pointed-toe-kitten-heeled-sandals',
  //           label: 'Hot',
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'RelatedProducts',
  //           type: 'link',
  //           path: 'product/delicious-biscuits',
  //           label: 'Hot',
  //           labelClass: 'warning-label',
  //         },
  //         {
  //           title: 'WishlistAndCompare',
  //           path: 'product/crispy-potato-chips',
  //           type: 'link',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'MegaMenu',
  //   badge: 'New',
  //   styleType: 'link',
  //   customChildren: true,
  //   slider: 'banner_landscape',
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: 'PopularCategories',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'VegetablesFruits',
  //           type: 'link',
  //           path: 'collections',
  //           params: { category: 'vegetables-fruits' },
  //         },
  //         {
  //           title: 'BiscuitsSnacks',
  //           type: 'link',
  //           label: 'new',
  //           path: 'collections',
  //           params: { category: 'biscuits-snacks' },
  //         },
  //         {
  //           title: 'DailyBreakfast',
  //           type: 'link',
  //           label: 'new',
  //           path: 'collections',
  //           params: { category: 'daily-breakfast' },
  //         },
  //         {
  //           title: 'TrendyFashion',
  //           type: 'link',
  //           path: 'collections',
  //           params: { category: 'fashion' },
  //         },
  //         {
  //           title: 'FurnitureDecore',
  //           type: 'link',
  //           path: 'collections',
  //           params: { category: 'furniture' },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'PopularTags',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'BeautyProducts',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'beauty' },
  //         },
  //         {
  //           title: 'ElectronicsAccessories',
  //           type: 'link',
  //           label: 'hot',
  //           labelClass: 'warning-label',
  //           path: 'collections',
  //           params: { tag: 'electronics' },
  //         },
  //         {
  //           title: 'PetShop',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'pet-shop' },
  //         },
  //         {
  //           title: 'MilkDairyProducts',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'milk-dairy-products' },
  //         },
  //         {
  //           title: 'Sports',
  //           type: 'link',
  //           path: 'collections',
  //           params: { tag: 'sports' },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'EmailTemplate',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'WelcomeTemplate',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/welcome.html',
  //         },
  //         {
  //           title: 'abondonment',
  //           type: 'external_link',
  //           label: 'hot',
  //           labelClass: 'warning-label',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html',
  //         },
  //         {
  //           title: 'OfferTemplate',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html',
  //         },
  //         {
  //           title: 'OrderSuccess',
  //           type: 'external_link',
  //           label: 'new',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/order-success.html',
  //         },
  //         {
  //           title: 'ResetPassword',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html',
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: 'InvoiceTemplate',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'InvoiceTemplate1',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html',
  //         },
  //         {
  //           title: 'InvoiceTemplate2',
  //           type: 'external_link',
  //           label: 'hot',
  //           path: 'https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html',
  //         },
  //         {
  //           title: 'InvoiceTemplate3',
  //           type: 'external_link',
  //           path: 'https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'Blog',
  //   styleType: 'link',
  //   customChildren: true,
  //   slider: 'blog',
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: 'Nos Catégories',
  //           type: 'sub',
  //         },
  //         {
  //           title: 'Nouveautés et actualités',
  //           type: 'link',
  //           path: 'blogs',
  //           label: 'New',
  //           params: { category: 'nouveautes-et-actualites' },
  //         },
  //         {
  //           title: 'Recommendations',
  //           type: 'link',
  //           label: 'Hot',
  //           path: 'blogs',
  //           params: { category: 'recommandations' },
  //         },
  //         {
  //           title: "Guides d'achat",
  //           type: 'link',
  //           path: 'blogs',
  //           params: { category: 'guides-dachat' },
  //         },
  //         {
  //           title: 'Derrière les Coulisses',
  //           type: 'link',
  //           path: 'blogs',
  //           labelClass: 'warning-label',
  //           params: { category: 'dermier-les-coulisses' },
  //         },
  //         {
  //           title: 'Astuces et Conseils',
  //           type: 'link',
  //           path: 'blogs',
  //           params: { category: 'astuces-et-conseils' },
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 5,
    title: 'Modes de Paiement',
    type: 'link',
    path: '/payment-methods',
  },
  // {
  //   id: 5,
  //   title: 'Guides',
  //   type: 'link',
  //   path: '/',
  // },
  {
    id: 5,
    title: 'Contact',
    type: 'link',
    path: '/contact-us',
  },
];
