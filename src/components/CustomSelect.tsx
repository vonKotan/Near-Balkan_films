import React, { useState, useEffect } from "react"
interface Props {
    isMulti: boolean,
    options : {label:string, value:string} [],
    onSelect: (value:string | string []) => void
    }
export function CustomSelect({ isMulti, options, onSelect }: Props) {

    const [selected, setSelected] = useState<string []>([])

    function handleClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>, value: string) {
        if(!isMulti){
            onSelect(value);
            return;
        }
        if ((e.target as HTMLInputElement).checked) {
            setSelected([...selected, value])
        }
        else{
            setSelected(selected.filter(v => v !== value))
        }
    }

    useEffect(() => { onSelect(selected) }, [selected])

    return (
        <div className="flex flex-wrap space-x-4 p-5">
            <div className="buttonSelect container flex flex-wrap space-x-3 space-y-4 p-4 justify-center">
                {options.map((option) =>
                    <label className="mt-4 ml-3" >
                        <input type={isMulti ? "checkbox" : "radio"}
                            className="peer/buttonSelect hidden" 
                            onClick={(e) => handleClick(e, option.value)}
                            name="select" />
                        <span
                            className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">{option.label}</span></label>
                )}
            </div>
        </div>
    )
}