import { Poppins } from 'next/font/google'

const poppinsTextFont = Poppins({
    weight: '200',
    subsets: ['latin'],
    style: ['italic']
})


export function Footer() {
    return (
        <main className="h-20 flex gap-40 justify-center items-center w-full bg-[var(--main-blue-bg)]">
            <p className={`${poppinsTextFont.className} text-white`} >
                Desenvolvido por Érico
            </p>
        </main>
    )
}
