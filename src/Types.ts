import sharp, { Color } from 'sharp'
import { StickerTypes } from './internal/Metadata/StickerTypes'

/** Sticker metadata config */
export interface IStickerConfig {
    /** Sticker Pack title*/
    pack?: string
    /** Sticker Pack Author*/
    author?: string
    /** android app pack url*/
    androidapp_link?: string
   /** ios app pack url*/
    iosapp_link?: string
    /** Sticker Pack ID*/
    id?: string
    /** Sticker Category*/
    categories?: Categories[]
}

export interface IStickerOptions extends IStickerConfig {
    /** How you want your sticker to look like
     * Can be crop or full. Defaults to 'default' (no changes)
     */
    type?: StickerTypes | string

    /**
     * Quality of the output webp image. Must be an integer from 0 to 100 (defaults to 100
     */
    quality?: sharp.WebpOptions['quality']
    /**
     * Background Color of the sticker (only for type full)
     */
    background?: Color
}

export interface IRawMetadata {
    emojis: string[]
    'sticker-pack-id': string
    'sticker-pack-name': string
    'sticker-pack-publisher': string
    'android-app-store-link': string
    'ios-app-store-link': string
}

export type Metadata = IStickerConfig | IStickerOptions

type Love =
    | '❤'
    | '😍'
    | '😘'
    | '💕'
    | '😻'
    | '💑'
    | '👩‍❤‍👩'
    | '👨‍❤‍👨'
    | '💏'
    | '👩‍❤‍💋‍👩'
    | '👨‍❤‍💋‍👨'
    | '🧡'
    | '💛'
    | '💚'
    | '💙'
    | '💜'
    | '🖤'
    | '💔'
    | '❣'
    | '💞'
    | '💓'
    | '💗'
    | '💖'
    | '💘'
    | '💝'
    | '💟'
    | '♥'
    | '💌'
    | '💋'
    | '👩‍❤️‍💋‍👩'
    | '👨‍❤️‍💋‍👨'
    | '👩‍❤️‍👨'
    | '👩‍❤️‍👩'
    | '👨‍❤️‍👨'
    | '👩‍❤️‍💋‍👨'
    | '👬'
    | '👭'
    | '👫'
    | '🥰'
    | '😚'
    | '😙'
    | '👄'
    | '🌹'
    | '😽'
    | '❣️'
    | '❤️'
type Happy =
    | '😀'
    | '😃'
    | '😄'
    | '😁'
    | '😆'
    | '😅'
    | '😂'
    | '🤣'
    | '🙂'
    | '😛'
    | '😝'
    | '😜'
    | '🤪'
    | '🤗'
    | '😺'
    | '😸'
    | '😹'
    | '☺'
    | '😌'
    | '😉'
    | '🤗'
    | '😊'
type Sad =
    | '☹'
    | '😣'
    | '😖'
    | '😫'
    | '😩'
    | '😢'
    | '😭'
    | '😞'
    | '😔'
    | '😟'
    | '😕'
    | '😤'
    | '😠'
    | '😥'
    | '😰'
    | '😨'
    | '😿'
    | '😾'
    | '😓'
    | '🙍‍♂'
    | '🙍‍♀'
    | '💔'
    | '🙁'
    | '🥺'
    | '🤕'
    | '☔️'
    | '⛈'
    | '🌩'
    | '🌧'
type Angry =
    | '😯'
    | '😦'
    | '😧'
    | '😮'
    | '😲'
    | '🙀'
    | '😱'
    | '🤯'
    | '😳'
    | '❗'
    | '❕'
    | '🤬'
    | '😡'
    | '😠'
    | '🙄'
    | '👿'
    | '😾'
    | '😤'
    | '💢'
    | '👺'
    | '🗯️'
    | '😒'
    | '🥵'
type Greet = '👋'
type Celebrate =
    | '🎊'
    | '🎉'
    | '🎁'
    | '🎈'
    | '👯‍♂️'
    | '👯'
    | '👯‍♀️'
    | '💃'
    | '🕺'
    | '🔥'
    | '⭐️'
    | '✨'
    | '💫'
    | '🎇'
    | '🎆'
    | '🍻'
    | '🥂'
    | '🍾'
    | '🎂'
    | '🍰'

/** Sticker Category. Learn More: https://github.com/WhatsApp/stickers/wiki/Tag-your-stickers-with-Emojis*/
export type Categories = Love | Happy | Sad | Angry | Greet | Celebrate