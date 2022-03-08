import { Entity } from "./Entity"
export interface ResponseVideo {
  title: string
  subtitle: string
  description: string
  sources: string
  thumb: string
}
export default class Video extends Entity {
  title: string
  subtitle: string
  description: string
  url: string
  thumbnail: string

  constructor({
    title,
    subtitle,
    description,
    url,
    thumbnail,
  }: Record<string, string>) {
    super()
    this.title = title
    this.subtitle = subtitle
    this.description = description
    this.url = url
    this.thumbnail = thumbnail
  }
}
