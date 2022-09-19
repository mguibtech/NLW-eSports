import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css'

import logoImg from './assets/logo.svg';
import { GamerBanner } from './components/GamerBanner';
import { CreatedAdBanner } from './components/CreatedAdBanner';

import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

interface Game {
  id: string,
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <samp className='text-6xl font-bold text-transparent bg-nlw-gradient bg-clip-text'>duo</samp> está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(game => {
            return (
              <GamerBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            )
          })
        }
      </div>

      <Dialog.Root>
        <CreatedAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}