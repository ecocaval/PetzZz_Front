import { Lato } from 'next/font/google'
import DefaultUserIcon from '../vectors/DefaultUserIcon'

const latoTextFont = Lato({
    weight: '300',
    subsets: ['latin'],
    style: ['normal']
})

interface RaitingCommentsCards {
    userImageProfile?: string
    userName?: string
    comment?: string
}

export function RaitingComments({ raitingCommentsCards }:
    { raitingCommentsCards: RaitingCommentsCards[] }
) {
    return (
        <ul className='ps-4 flex py-6 gap-6 overflow-x-auto w-[1/1] scrollbar-hide'>
            {
                raitingCommentsCards.map((commentCard) => (
                    <li className="bg-[var(--card-opaque-yellow-bg)] min-w-[125px] shadow-lg h-24 rounded-xl text-sm p-4">
                        <p className={`${latoTextFont.className} text-slate-600 text-ellipsis h-2/3 overflow-hidden`}>{commentCard?.comment}</p>
                        <div className='flex gap-1 h-max'>
                            <DefaultUserIcon />
                            <p className='text-slate-500 whitespace-nowrap'>{commentCard?.userName}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
