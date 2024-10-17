import Image from 'next/image'

export const DarkenedImage = ({
  imgSrc,
  alt,
}: {
  imgSrc: string
  alt: string
}) => {
  return (
    <div className="relative block aspect-video overflow-hidden rounded-xl border border-stone-300">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20"></div>
    </div>
  )
}
