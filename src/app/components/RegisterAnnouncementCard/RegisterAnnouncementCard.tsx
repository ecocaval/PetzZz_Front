import '@/app/globals.css'
import { Poppins, Lato } from 'next/font/google'
import EarthIcon from '../vectors/EarthIcon'
import { RaitingComments } from '../RaitingComments/RaitingComments'
import { DEFAULT_RAITING_COMMENTS } from '@/app/utils/defaultRaitingComments'

const poppinsTextFont = Poppins({
    weight: '200',
    subsets: ['latin'],
    style: ['italic']
})

const latoTextFont = Lato({
    weight: '300',
    subsets: ['latin'],
    style: ['italic']
})

const LEFT_SECTION_TOP_TEXT = "Garantir suas entregas com rapidez e qualidade, independente de onde esteja!"
const LEFT_SECTION_MIDDLE_TEXT = "O que nossos clientes estão dizendo?"
const LEFT_SECTION_BOTTOM_TEXT = "Garantir suas entregas com rapidez e qualidade, independente de onde esteja!"

export function RegisterAnnouncementCard() {
    return (
        <>
            <div className="w-[56%] h-2/3 px-4 flex-start rounded-2xl shadow-xl bg-[var(--super-heavy-yellow-bg)]">
                <div className='w-1/2 py-8'>
                    <h2 className={`${poppinsTextFont.className} text-shadow text-white text-center text-2xl`}>
                        Nosso objetivo?
                    </h2>
                    <p className={`${latoTextFont.className} text-center my-4 px-12`}>
                        {LEFT_SECTION_TOP_TEXT}
                    </p>
                    <div className="mx-auto w-10 my-6">
                        <EarthIcon />
                    </div>
                    <h2 className={`${poppinsTextFont.className} px-8 text-shadow text-white text-center text-2xl`}>
                        {LEFT_SECTION_MIDDLE_TEXT}
                    </h2>
                    <p className={`${latoTextFont.className} text-center my-4 px-12`}>
                        {LEFT_SECTION_BOTTOM_TEXT}
                    </p>
                    <RaitingComments raitingCommentsCards={DEFAULT_RAITING_COMMENTS}/>
                </div>
            </div>
        </>
    )
}