import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import {Product} from "components/Product/Product";

export const metadata: Metadata = {
  title: "DealDaddy.de",
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
      image: 'https://static.mydealz.de/threads/raw/Q2nsR/2308043_1/re/300x300/qt/60/2308043_1.jpg',
      title: 'FRANZIS 67157 - Der große Technikbausatz Hybridmotor - (inkl. Motor Soundmodul / Motorbausatz im Maßstab 1:3 / 110 Teile / Begleitbuch))'
    },
    {
      image: 'https://static.mydealz.de/threads/raw/WF5RM/2308044_1/re/300x300/qt/60/2308044_1.jpg'
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
                  (<Product key={index} image={product.image} title={product.title} />)
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
