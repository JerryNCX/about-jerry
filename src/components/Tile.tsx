import type { ReactNode } from "react"; 
// ReactNode is the TypeScript type for "anything React can render": text, elements, lists, or nothing.

type TileProps ={
    id?:string
    className?:string
    children: ReactNode
}

export default function Tile({id, className = '', children}: TileProps){
    return (
        <section id={id} className={'rounded-3xl border border-neutral-800 bg-neutral-900 p-6 ' + className}>
            {children}
        </section>
    )
}