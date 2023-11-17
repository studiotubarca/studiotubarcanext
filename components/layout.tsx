
import Image from "next/image";
import background from '../public/assets/blog/texture/bg-texture.webp';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className='bg'>
        <Image
          src={background}
          alt='fondo'
          layout='fill'
          objectFit="cover"
          quality={100}
          sizes="100vw"
          placeholder="blur"
          priority
        />

      </div>
      <main>{children}</main>

    </>
  )
}

export default Layout
