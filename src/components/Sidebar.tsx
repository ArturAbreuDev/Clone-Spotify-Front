import {
  HomeIcon,
  Search,
  Library,
  PlusSquare,
  Heart,
  Radar,
} from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black">
      <nav className="flex flex-col ml-2 mt-16 p-2 gap-4 text-center justify-center">
        <a className="flex gap-4 text-sm" href="">
          <HomeIcon />
          <h1 className="text-sm text-center text-zinc-300 hover:text-white">
            Home
          </h1>
        </a>
        <a className="flex gap-4 text-sm" href="">
          <Search />

          <h1 className="text-sm text-center text-zinc-300 hover:text-white">
            Search
          </h1>
        </a>
        <a className="flex gap-4 " href="">
          <Library />
          <h1 className="text-sm text-center text-zinc-300 hover:text-white">
            Your Library
          </h1>
        </a>
      </nav>

      <div className="h-0.5 rounded-full mt-10 w-full bg-zinc-800"></div>
      <nav className="flex flex-col ml-2 mt-12 p-2 gap-4 text-center justify-center">
        <a className="flex gap-4 text-sm" href="">
          <PlusSquare />
          <h1 className="text-sm text-center text-zinc-300 hover:text-white">
            Create Playlist
          </h1>
        </a>
        <a className="flex gap-4 text-sm" href="">
          <Heart />

          <h1 className="text-sm text-center text-zinc-300 hover:text-white">
            Liked Songs
          </h1>
        </a>
        <a className="flex gap-4 " href="">
          <Radar />
          <h1 className="text-sm text-center text-zinc-300 hover:text-white">
            Your Episodes
          </h1>
        </a>
      </nav>

      <div className="h-0.5 mt-7 rounded-full w-full bg-zinc-800"></div>

      <nav className="flex flex-col ml-2 mt-12 p-2 gap-4  justify-center">
        <a href="">
          {' '}
          <h1 className="text-sm  text-zinc-300 hover:text-white">
            Trap Vibes
          </h1>
        </a>

        <a className="text-sm  text-zinc-300 hover:text-white" href="">
          {' '}
          <h1>FAV</h1>
        </a>

        <a className="text-sm  text-zinc-300 hover:text-white" href="">
          <h1>Daily Mix 1</h1>
        </a>

        <a className="text-sm  text-zinc-300 hover:text-white" href="">
          {' '}
          <h1>Liked Songs</h1>
        </a>
        <a className="text-sm  text-zinc-300 hover:text-white" href="">
          {' '}
          <h1>Liked Songs</h1>
        </a>
        <a className="text-sm  text-zinc-300 hover:text-white" href="">
          {' '}
          <h1>Liked Songs</h1>
        </a>
        <a className="text-sm  text-zinc-300 hover:text-white" href="">
          {' '}
          <h1>Liked Songs</h1>
        </a>
      </nav>
    </aside>
  )
}
