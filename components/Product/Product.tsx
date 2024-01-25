import { cva, type VariantProps } from "class-variance-authority"

import Image from 'next/image'

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ProductProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  image: string
  title: string
}

export function Product({ ...props }: ProductProps) {
  return (
      <article
          className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs min-w-full mx-auto border border-white bg-white">
          <div className="w-1/3 bg-white grid place-items-center">
              <Image
                  src={props.image}
                  width={500}
                  height={300}
                  alt="tailwind logo" className="rounded-xl"/>
          </div>
          <div className="w-2/3 bg-white flex flex-col space-y-2 p-3">
              <div className="flex justify-between item-center">
                  <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                           fill="currentColor">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <p className="text-gray-600 font-bold text-sm ml-1">
                          4.96
                          <span className="text-gray-500 font-normal">(76 reviews)</span>
                      </p>
                  </div>
                  <div
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                      Superhost
                  </div>
              </div>
              <h3 className="font-black text-gray-800 text-l text-left truncate">{props.title}</h3>
              <p className="text-gray-500 text-base">The best kept secret of The Bahamas is the country’s
                  sheer
                  size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
              <p className="text-xl font-black text-gray-800">
                  $110
                  <span className="font-normal text-gray-600 text-base">/night</span>
              </p>
          </div>
      </article>

  )
}
