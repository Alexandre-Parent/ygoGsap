import React, { useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'

const AnimeTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("")
    const itemRef = useRef(null)

    const handleMouseMove = (event) => {
        if (!itemRef.current) return

        const { left, top, width, height } = itemRef.current.getBoundingClientRect()
        const relativeX = (event.clientX - left) / width
        const relativeY = (event.clientY - top) / height

        const tiltX = (relativeY - 0.5) * 5
        const tiltY = (relativeX - 0.5) * -5

        setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`)
    }

    const handleMouseLeave = () => {
        setTransformStyle("")
    }

    const combinedClassName = [className, 'transition-transform duration-300 will-change-transform'].filter(Boolean).join(' ')

    return (
        <div
            ref={itemRef}
            className={combinedClassName}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
}

const AnimeCard = ({ src, title, descripton, isComingSoon, url}) =>{
    return(
        <div className='relative size-full overflow-hidden rounded-md'>
            <video src={src} loop muted autoPlay className='absolute left-0 top-0 size-full object-cover object-center'/>
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h3 className='anime-title special-font'>{title}</h3>
                    {descripton && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{descripton}</p>   
                    )}
                </div>
                <div className='mt-6'>
                    {isComingSoon ? (
                        <Button
                            title="Bientôt disponible"
                            containerClass="!bg-black border border-blue-50 text-blue-50 cursor-default hover:bg-black hover:text-blue-50"
                        />
                    ) : (
                        url && (
                            <a
                                href={url}
                                target='_blank'
                                rel='noreferrer'
                                className='inline-block'
                            >
                                <Button
                                    title="Voir l'histoire"
                                    containerClass="bg-transparent border border-blue-50 text-black hover:bg-blue-50 hover:text-black"
                                />
                            </a>
                        )
                    )}
                </div>
            </div>
           
        </div>
    )
}

const Features = () => {
    return (
        <section className='bg-black pb-20 pt-10'>
            <div className='mx-auto w-full max-w-6xl px-3 md:px-10'>
                <div className='py-10'>
                    <p className='font-circular-web text-lg text-blue-50'>Toutes les histoires</p>
                </div>
                <div>
                    <p className='max-w-2xl text-lg font-circular-web text-blue-50 opacity-70'>
                        Plonge dans des épisodes courts et dynamiques qui donnent vie aux cartes les plus emblématiques de Yu-Gi-Oh!. Chaque court-métrage revisite un archétype à travers une mise en scène moderne et fidèle à son lore.
                    </p>
                </div>
            </div>

            <div className='relative mt-10 w-screen -translate-x-1/2 px-3 md:px-10 left-1/2'>
                <div className='border-hsla relatve h-[60vh] min-h-[22rem] w-full overflow-hidden rounded-2xl'>
                    <AnimeCard
                        src='videos/feature-1.mp4'
                        title={"Albaz le déchu"}
                        descripton={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                        isComingSoon={false}
                        url='https://www.yugioh-card.com'
                    />
                </div>
            </div>

            <div className='relative mt-12 w-screen -translate-x-1/2 px-3 md:px-10 left-1/2'>
                <div className='grid gap-6 lg:grid-cols-2 lg:items-stretch'>
                    <AnimeTilt className='anime-tilt_1 h-full min-h-[50vh]'>
                        <AnimeCard
                            src='videos/feature-2.mp4'
                            title={"Albaz le déchu"}
                            descripton={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                            isComingSoon={false}
                            url='https://www.yugioh-card.com'
                        />
                    </AnimeTilt>
                    <div className='grid h-full gap-6 lg:pl-4'>
                        <AnimeTilt className='anime-tilt_2 h-[40vh] min-h-[16rem] w-full'>
                            <AnimeCard
                                src='videos/feature-3.mp4'
                                title={"Albaz le déchu"}
                                descripton={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                                isComingSoon={false}
                                url='https://www.yugioh-card.com'
                            />
                        </AnimeTilt>
                        <AnimeTilt className='anime-tilt_2 h-[40vh] min-h-[16rem] w-full'>
                            <AnimeCard
                                src='videos/feature-4.mp4'
                                title={"Albaz le déchu"}
                                descripton={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                                isComingSoon={true}
                            />
                        </AnimeTilt>
                    </div>
                </div>
                <div className='mt-6 grid gap-6 lg:grid-cols-2'>
                    <AnimeTilt className='anime-tilt_2 h-[28vh] min-h-[12rem] w-full overflow-hidden rounded-md lg:h-[40vh] lg:min-h-[16rem]'>
                        <div className='flex size-full flex-col justify-between rounded-md bg-red-500 p-4 lg:p-5'>
                            <h3 className='anime-title special-font max-w-64 text-black text-lg lg:text-xl'>More coming soon</h3>
                            <TiLocationArrow className='m-3 scale-[3] self-end lg:m-5 lg:scale-[5]' />
                        </div>
                    </AnimeTilt>
                    <AnimeTilt className='anime-tilt_2 h-[40vh] min-h-[16rem] w-full overflow-hidden rounded-md'>
                        <video src="videos/feature-5.mp4" loop muted autoPlay className='size-full object-cover object-center' />
                    </AnimeTilt>
                </div>
            </div>
        </section>
    )
}

export default Features