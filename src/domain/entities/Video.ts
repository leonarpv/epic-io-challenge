import { Entity } from "./Entity"
export interface ResponseVideo {
  title: string
  subtitle: string
  description: string
  sources: string
  thumb: string
}
export interface IVideo {
  title: string
  subtitle: string
  description: string
  src: string
  thumbnail: string
}
export default class Video extends Entity {
  title: string
  subtitle: string
  description: string
  src: string
  thumbnail: string

  constructor({ title, subtitle, description, src, thumbnail }: IVideo) {
    super()
    this.title = title
    this.subtitle = subtitle
    this.description = description
    this.src = src
    this.thumbnail = thumbnail
  }
}
