import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Image from 'next/image'
import { getPostBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Footer from '../../components/footer'
import ProjectVideo from '../../components/project-video'

import HeroImg from '../../public/assets/blog/ghee-img/ghee-hero.webp'
import Flor from '../../public/assets/blog/footer/flor-manifiesto.png'
import GheeSpoon from '../../public/assets/blog/ghee-img/gheeSpoon.webp'
import GheePot from '../../public/assets/blog/ghee-img/gheePot.png'
import GheeSunset from '../../public/assets/blog/ghee-img/gheeSunset.webp'


type Props = {
    post: PostType
    preview?: boolean
}

export default function Ghee({ post, preview }: Props) {
    const router = useRouter()
    const title = `${post.title} by studiotubarca`
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    console.log(post.video)
    return (
        <Layout>
            <section className='min-h-screen w-screen'>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImage.url} />
                            </Head>
                            <div className='w-screen'>
                                <div className='relative grid justify-items-center z-10 p-10 md:p-20 bg-custom-background'>
                                    <Image
                                        src={HeroImg}
                                        alt='Ghee Logo'
                                        className='w-screen'
                                        placeholder="blur"
                                        style={{ objectFit: "cover" }}
                                        priority />

                                </div>
                                <div className='relative bg-custom-background z-10 grid flex content-evenly'>
                                    <div className=' z-20 grid grid-cols-2 w-full'>
                                        <div className='grid grid-cols-2 items-center md:pl-20 md:mt-40 text-xs md:text-base'>
                                            <a href='/assets/blog/pdf/que-es-ghee.pdf' download>
                                                <Image
                                                    src={Flor}
                                                    alt='Flor Manifiesto'
                                                    quality={100}
                                                    placeholder="blur"
                                                    className='hover:shadow-lg transition-shadow duration-200'
                                                    style={{ objectFit: "contain" }}
                                                    width={200}
                                                    height={200}
                                                    priority
                                                />
                                            </a>

                                            <p className='md:text-3xl'>Qué es Gheemegold?</p>
                                            <a href='/assets/blog/pdf/beneficios-ghee.pdf' download>
                                                <Image
                                                    src={Flor}
                                                    alt='Flor Manifiesto'
                                                    quality={100}
                                                    placeholder="blur"
                                                    className='hover:shadow-lg transition-shadow duration-200'
                                                    style={{ objectFit: "contain" }}
                                                    width={200}
                                                    height={200}
                                                    priority
                                                />
                                            </a>
                                            <p className='md:text-3xl'>Beneficios</p>
                                        </div>
                                        <div className='flex justify-end '>
                                            <Image
                                                src={GheeSpoon}
                                                alt='Ghee Spoon'
                                                quality={100}
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}
                                                priority
                                            />
                                        </div>
                                        <div className='col-span-2 md:col-span-1 p-5'>
                                            <Image
                                                src={GheePot}
                                                alt='Ghee Pot'
                                                quality={100}
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}
                                                priority
                                            />
                                        </div>
                                        <div className='text-center md:text-3xl md:text-left flex items-center grid justify-content-center p-5 md:pl-20 hidden md:flex'>
                                            <div>
                                                <p className='md:leading-relax'>Es la cocina el corazón de cada hogar.</p>
                                                <p className='md:leading-relax'>En dónde se reúnen generaciones,</p>
                                                <p className='md:leading-relax'>se comparten historias,</p>
                                                <p className='md:leading-relax'>y se vierte amor en cada plato.</p>

                                                <p className='mt-5 md:mt-10 md:leading-relax'>En una búsqueda por conectar tradiciones,</p>
                                                <p className='md:leading-relax'>encontrar la pureza</p>
                                                <p className='md:leading-relax'>y resaltar la esencia de cada hogar.</p>

                                                <p className='mt-5 md:mt-10 md:leading-relax'>Abrimos las puertas de GHEE ME GOLD,</p>
                                                <p className='md:leading-relax'>dónde cocinamos el mejor GHEE casero,</p>
                                                <p className='md:leading-relax'>con amor y pura autenticidad.</p>

                                            </div>
                                        </div>
                                        <div className='text-center text-sm  flex items-center grid justify-items-center p-5 col-span-2 md:hidden'>
                                            <p className='md:leading-loose'>Es la cocina el corazón de cada hogar.</p>
                                            <p className='md:leading-loose'>En dónde se reúnen generaciones,</p>
                                            <p className='md:leading-loose'>se comparten historias,</p>
                                            <p className='md:leading-loose'>y se vierte amor en cada plato.</p>
                                            <p className='mt-5 md:mt-10 md:leading-loose'>En una búsqueda por conectar tradiciones,</p>
                                            <p className='md:leading-loose'>encontrar la pureza</p>
                                            <p className='md:leading-loose'>y resaltar la esencia de cada hogar.</p>

                                            <p className='mt-5 md:mt-10 md:leading-loose'>Abrimos las puertas de GHEE ME GOLD,</p>
                                            <p className='md:leading-loose'>dónde cocinamos el mejor GHEE casero,</p>
                                            <p className='md:leading-loose'>con amor y pura autenticidad.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-custom-background z-10 relative w-full'>
                                    <div className='md:col-span-2'>
                                        <div className='w-full md:h-screen'>
                                            <Image
                                                src={GheeSunset}
                                                alt='Ghee Pot'
                                                placeholder="blur"
                                                style={{ objectFit: "contain" }}

                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className='z-10 relative w-full'>
                                    <ProjectVideo video={post.video} videoMobile={post.videoMobile}></ProjectVideo>
                                </div>
                            </div>
                            <Footer nextProject={post.nextProject} nextProjectImg={post.nextProjectImg} manifiesto=''></Footer>
                            <div className='footer-screen'></div>
                        </article>
                    </>
                )}

            </section>

        </Layout >
    )
}

export async function getStaticProps() {

    const post = getPostBySlug('ghee', [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'nameImage',
        'nameGif',
        'nextProjectImg',
        'video',
        'videoMobile',
        'nextProject'
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

