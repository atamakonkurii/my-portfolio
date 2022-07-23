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
    GitHub_Mark_32px_png: '/img/GitHub-Mark-32px.png',
    LINE_APP_Android_webp: '/img/LINE_APP_Android.webp',
    Twitter_social_icons___circle___blue_png: '/img/Twitter social icons - circle - blue.png',
    book_yoko_png: '/img/book_yoko.png',
    character_hitsuji_ookami_png: '/img/character_hitsuji_ookami.png',
    coffee01_blend_png: '/img/coffee01_blend.png',
    dog1_smile_png: '/img/dog1_smile.png',
    food_beefsteak_png: '/img/food_beefsteak.png',
    jamstack_stripe_logo_png: '/img/jamstack_stripe_logo.png',
    my_image_jpg: '/img/my_image.jpg',
    ogp_png: '/img/ogp.png',
    ojigi_animal_inu_png: '/img/ojigi_animal_inu.png',
    ojigi_man_webp: '/img/ojigi_man.webp',
    travel_bus_train_couple_webp: '/img/travel_bus_train_couple.webp',
    youtube_social_icon_red_png: '/img/youtube_social_icon_red.png'
  },
  mockServiceWorker_js: '/mockServiceWorker.js'
} as const

export type StaticPath = typeof staticPath
