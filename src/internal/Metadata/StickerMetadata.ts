import { Categories, IStickerConfig, IStickerOptions } from '../../Types'
import Utils from '../../Utils'

export default class StickerMetadata implements IStickerOptions {
    public crop = false
    public full = false
    constructor(
        public pack = '',
        public author = '',
        public androidapp_link = '',
        public iosapp_link = '',
        public categories: Categories[] = [],
        public id = Utils.generateStickerID()
    ) {}

    static from = (object: Partial<StickerMetadata>): StickerMetadata => {
        return new StickerMetadata(object.pack, object.author, object.androidapp_link, object.iosapp_link, object.categories, object.id)
    }

    public setPack = (title: string): this => {
        this.pack = title
        return this
    }

    public setAuthor = (author: string): this => {
        this.author = author
        return this
    }

    public setAndroidAppLink = (androidapp_link: string): this => {
        this.androidapp_link = androidapp_link
        return this
    }

    public setIOSAppLink = (iosapp_link: string): this => {
        this.iosapp_link = iosapp_link
        return this
     }

    public setId = (id: string): this => {
        this.id = id
        return this
    }

    public setCrop = (value: boolean): this => {
        this.crop = value
        this.full = !value
        return this
    }

    public setFull = (value: boolean): this => {
        this.crop = !value
        this.full = value
        return this
    }

    public setCategories = (categories: string | string[]): this => {
        this.categories = (
            typeof categories === 'string' ? categories.split(',').map((emoji) => emoji.trim()) : categories
        ) as Categories[]
        return this
    }

    public toJSON = (): IStickerConfig => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj: any = {}
        Object.keys(this)
            .filter((key) => typeof this[key as keyof this] !== 'function')
            .forEach((key) => (obj[key] = this[key as keyof IStickerConfig] as IStickerConfig[keyof IStickerConfig]))
        return obj as IStickerConfig
    }
}
