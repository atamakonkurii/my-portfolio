export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
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
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  img: {
    book_yoko_png: '/img/book_yoko.png',
    coffee01_blend_png: '/img/coffee01_blend.png',
    food_beefsteak_png: '/img/food_beefsteak.png',
    jamstack_stripe_logo_png: '/img/jamstack_stripe_logo.png',
    my_image_jpg: '/img/my_image.jpg',
    ojigi_animal_inu_png: '/img/ojigi_animal_inu.png',
    ramen_jpg: '/img/ramen.jpg'
  }
} as const

export type StaticPath = typeof staticPath
