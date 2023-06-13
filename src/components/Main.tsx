import { ChevronDown, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Main() {
  return (
    <main className="flex-1 bg-zinc-900">
      <div className="flex gap-5 mt-14 ml-10 justify-between ">
        <div className="flex gap-5">
          <ChevronLeft
            size={30}
            className="hover:cursor-pointer bg-zinc-800 rounded-full"
          />
          <ChevronRight
            size={30}
            className="hover:cursor-pointer bg-zinc-800 rounded-full"
          />
        </div>
        <div className="mr-10 flex items-center gap-5 bg-zinc-800 rounded-full ">
          <Image
            src="/jackboys.jpg"
            width={50}
            height={10}
            className="rounded-full"
            alt="Imagem Jackboys Travis Scott"
          />
          <span className="text-zinc-300 ">Artur Damaceno</span>
          <ChevronDown className="mr-2 hover:cursor-pointer" />
        </div>
      </div>
      <div className="mt-10 ml-10">
        <h1 className="text-white text-4xl font-bold">Good morning</h1>
        <div className="gap-4 grid mt-10 grid-cols-4 mr-10">
          <div className="bg-white/10 rounded group flex gap-4 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="flex">Travis Scott</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </div>
          <div className="bg-white/10 rounded group flex gap-4 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="flex">Travis Scott</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </div>
          <div className="bg-white/10 rounded group flex gap-4 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="flex">Travis Scott</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </div>
          <div className="bg-white/10 rounded group flex gap-4 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="flex">Travis Scott</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </div>
          <div className="bg-white/10 rounded group flex gap-4 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="flex">Travis Scott</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-10">
        <h1 className="text-white font-bold text-2xl">Shows you might like</h1>
        <div className="grid grid-cols-6 mt-10 gap-20 mr-10">
          <div className="bg-white/10 flex-col rounded flex p-2 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              className="w-full"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />

            <div className="flex   flex-col">
              <strong className="text-md mt-2">Daily mix 1</strong>
              <h2 className="text-sm text-zinc-400">
                Veigh, Wiu,Yunk Vino e mais...
              </h2>
            </div>
          </div>
          <div className="bg-white/10 flex-col rounded flex p-2 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              className="w-full"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="text-md mt-2 text-start">Daily mix 2</strong>
            <h2 className="text-sm text-zinc-400">
              Veigh, Wiu,Yunk Vino e mais...
            </h2>
          </div>
          <div className="bg-white/10 flex-col rounded flex p-2 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              className="w-full"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="text-md mt-2 text-start">Daily mix 3</strong>
            <h2 className="text-sm text-zinc-400">
              Veigh, Wiu,Yunk Vino e mais...
            </h2>
          </div>
          <div className="bg-white/10 flex-col rounded flex p-2 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              className="w-full"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="text-md mt-2 text-start">Daily mix 4</strong>
            <h2 className="text-sm text-zinc-400">
              Veigh, Wiu,Yunk Vino e mais...
            </h2>
          </div>
          <div className="bg-white/10 flex-col rounded flex p-2 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              className="w-full"
              width={100}
              height={10}
              alt="Imagem Jackboys Travis Scott"
            />
            <strong className="text-md mt-2 text-start">Daily mix 5</strong>
            <h2 className="text-sm text-zinc-400">
              Veigh, Wiu,Yunk Vino e mais...
            </h2>
          </div>

          <div className="bg-white/10 flex-col rounded flex p-2 text-center items-center hover:bg-white/20 transition-colors hover:cursor-pointer">
            <Image
              src="/jackboys.jpg"
              className="w-full"
              width={100}
              alt="Imagem Jackboys Travis Scott"
              height={10}
            />
            <strong className="text-md mt-2 text-start">Daily mix 6</strong>
            <h2 className="text-sm text-zinc-400">
              Veigh, Wiu,Yunk Vino e mais...
            </h2>
          </div>
        </div>
      </div>
    </main>
  )
}
