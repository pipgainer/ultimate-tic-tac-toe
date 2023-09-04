import Image from 'next/image'
import { Inter } from 'next/font/google'
import TicTacToe from '../components/molecules/TicTacToe'
import UltimateTicTacToe from '../components/template/UltimateTicTacToe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`bg-black flex justify-center min-w-screen min-h-screen items-center ${inter.className}`}
        >
            <UltimateTicTacToe />
        </main>
    )
}
