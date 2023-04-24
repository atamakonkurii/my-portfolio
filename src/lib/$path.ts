export const pagesPath = {
  "about_author": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about_author' as const, hash: url?.hash })
  },
  "arigatou": {
    $url: (url?: { hash?: string }) => ({ pathname: '/arigatou' as const, hash: url?.hash })
  },
  "news": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/news/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash })
  },
  "no_page": {
    $url: (url?: { hash?: string }) => ({ pathname: '/no_page' as const, hash: url?.hash })
  },
  "privacy_policy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacy_policy' as const, hash: url?.hash })
  },
  "products": {
    "photo_werewolf": {
      "privacy_policy": {
        $url: (url?: { hash?: string }) => ({ pathname: '/products/photo_werewolf/privacy_policy' as const, hash: url?.hash })
      },
      $url: (url?: { hash?: string }) => ({ pathname: '/products/photo_werewolf' as const, hash: url?.hash })
    }
  },
  "specific_commercial_transaction": {
    $url: (url?: { hash?: string }) => ({ pathname: '/specific_commercial_transaction' as const, hash: url?.hash })
  },
  "term": {
    $url: (url?: { hash?: string }) => ({ pathname: '/term' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  apple_touch_icon_png: '/apple-touch-icon.png',
  favicon_ico: '/favicon.ico',
  img: {
    GitHub_Mark_32px_webp: '/img/GitHub-Mark-32px.webp',
    LINE_APP_Android_webp: '/img/LINE_APP_Android.webp',
    Twitter_social_icons___circle___blue_webp: '/img/Twitter social icons - circle - blue.webp',
    book_yoko_webp: '/img/book_yoko.webp',
    character_hitsuji_ookami_webp: '/img/character_hitsuji_ookami.webp',
    coffee01_blend_webp: '/img/coffee01_blend.webp',
    dog1_smile_webp: '/img/dog1_smile.webp',
    food_beefsteak_webp: '/img/food_beefsteak.webp',
    fujisan_webp: '/img/fujisan.webp',
    jamstack_stripe_logo_webp: '/img/jamstack_stripe_logo.webp',
    my_image_webp: '/img/my_image.webp',
    ogp_png: '/img/ogp.png',
    ojigi_animal_inu_webp: '/img/ojigi_animal_inu.webp',
    ojigi_man_webp: '/img/ojigi_man.webp',
    travel_bus_train_couple_webp: '/img/travel_bus_train_couple.webp',
    youtube_social_icon_red_webp: '/img/youtube_social_icon_red.webp'
  },
  mockServiceWorker_js: '/mockServiceWorker.js'
} as const

export type StaticPath = typeof staticPath
