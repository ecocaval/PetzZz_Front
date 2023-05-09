'use client'

import { useEffect, useRef, useState } from "react";

interface GenericInputProps {
    placeHolderText?: string
    extraClassConfigs?: string
    iconsExtraClassConfigs?: string
    useResponsivePlaceholder?: boolean
    children?: React.ReactNode
}

const DEFAULT_PLACEHOLDET_TEXT = "Busca..."

export function GenericInput({
    placeHolderText,
    extraClassConfigs, //? Para passar uma configuração extra de style ao input
    iconsExtraClassConfigs, //? Para passar uma configuração extra de style ao icon do input
    useResponsivePlaceholder = true,
    children
}: GenericInputProps) { 

    const inputRef = useRef<HTMLInputElement>(null);

    const [definitePlaceHolderText, setDefinitePlaceHolderText] = useState<string>(placeHolderText || DEFAULT_PLACEHOLDET_TEXT)

    useEffect(() => {
        /*  
            ? Responsável por definir o state do placeholderWidth
            ? Se o tamanho da tela for pequeno demais para o input
            ? setta o texto para um novo default menor.
    
            ! IMPORTANTE: Adequa o texto somente no primeiro load, esse component não pode ser server-side
            !             pois aqui nós utilizamos a window para fazer a lógica, que só existe no client...
        */
        if (useResponsivePlaceholder) {

            if (inputRef.current) {
                const placeHolderStyle = window.getComputedStyle(inputRef.current, '::placeholder');

                const screenIsSmallForPlaceHolder = (parseFloat(placeHolderStyle.width) > window.innerWidth / 2)

                if (screenIsSmallForPlaceHolder) {
                    setDefinitePlaceHolderText(DEFAULT_PLACEHOLDET_TEXT)
                }
            }
        }
    }, [])

    return (
        <>
            <span className={"relative " + extraClassConfigs}>
                <input
                    placeholder={definitePlaceHolderText}
                    ref={inputRef}
                    className={"placeholder-neutral-200 placeholder-hidden p-2 py-3 min-w-[140px] rounded-lg border border-1 border-[var(--main-blue-bg)] " + extraClassConfigs}
                />
                <div className={"absolute top-[50%] translate-y-[-50%] right-[0%] translate-x-[-50%] " + iconsExtraClassConfigs}>
                    {/* 
                        //? Essa children foi pensada para ser o icone que aparece a direita do input 
                    */}
                    {children}
                </div>
            </span>
        </>
    )
}