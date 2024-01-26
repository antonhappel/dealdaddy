import { Metadata } from "next"
import { Button } from "components/Button/Button"
import {Product} from "components/Product/Product"

export const metadata: Metadata = {
  title: "DealDaddy.de",
  other: {'google-adsense-account': 'ca-pub-5795833978477067',},
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {

  const products = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
  ]


  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              DealDaddy.de
            </h1>
            <section className="grid gap-4">
              { products.map((product, index) => (
                  (<Product key={index} image={product.image + '?random=' + index} title={product.title} />)
              ))}
            </section>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
                href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
                intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
