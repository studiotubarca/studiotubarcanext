import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  nameImage: string
  nameVideo: string
  nameGif: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  nameImage,
  nameVideo,
  slug,
}: Props) => {
  return (
    <div>
      <div className="">
        <CoverImage slug={slug} title={title} src={coverImage} nameI={nameImage} nameVideo={nameVideo} />
      </div>
    </div>
  )
}

export default PostPreview
