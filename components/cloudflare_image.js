import Image from 'next/image'

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }) => {
    if (!quality) {
        quality = 75
    }
    return `https://next-image.htoenjes.workers.dev?width=${width}&quality=${quality}&image=https://personal-website-3b3.pages.dev${src}`
}

export default function CloudFlareImage(props) {
    if (process.env.NODE_ENV === 'development') {
        return <Image unoptimized={true} {...props} />
    } else {
        return <Image {...props} loader={cloudflareImageLoader} />
    }
}