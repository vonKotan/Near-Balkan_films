import { useState, useEffect } from "react"

export function CustomSelect({ isMulti, options, onSelect }) {

    const [selected, setSelected] = useState([])

    function handleClick(e, value) {
        if(!isMulti){
            onSelect(value);
            return;
        }
        console.log(e.value)
        if (e.target.value === true) {
            addtoSelection(value);
        }
        if (e.target.value === false && isMulti) {
            removeFromSelection(value);
        }
    }

    function addtoSelection(value) {
        if (!isMulti) {
            onSelect(value)
        } else {
            setSelected([...selected, value])
        }
    }

    function removeFromSelection(value) {
        setSelected(selected.filter(v => v === value))
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

                { /*<label className="mt-4 ml-3"><input type="checkbox" name="roles" value="cameraman" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Cameraman</span></label>

                <label><input type="checkbox" name="roles" value="sound mixer" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Sound
                        mixer</span></label>

                <label><input type="checkbox" name="roles" value="screenwriter" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Screenwriter</span></label>

                <label><input type="checkbox" name="roles" value="actor" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Actor</span></label>

                <label><input type="checkbox" name="roles" value="director" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Director</span></label>

                <label><input type="checkbox" name="roles" value="music composer" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Music
                        Composer</span></label>

                <label><input type="checkbox" name="roles" value="set designer" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Set
                        Designer</span></label>

                <label><input type="checkbox" name="roles" value="gaffer" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Gaffer</span></label>

                <label><input type="checkbox" name="roles" value="boom operator" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Boom
                        operator</span></label>

                <label><input type="checkbox" name="roles" value="camera assistant" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Camera
                        Assistant</span></label>

                <label><input type="checkbox" name="roles" value="editor" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Editor</span></label>

                <label><input type="checkbox" name="roles" value="assistant director" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Assistant
                        Director</span></label>

                <label><input type="checkbox" name="roles" value="director of photography" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Director
                        of Photography</span></label>

                <label><input type="checkbox" name="roles" value="production assistant" tabindex="0"
                    className="peer/buttonSelect hidden" /><span
                        className="rounded-full border border-dashed border-nborangemain hover:border-solid peer-checked/buttonSelect:border-solid peer-checked/buttonSelect:border-nborangemain peer-checked/buttonSelect:border-2 peer-checked/buttonSelect:bg-nbwhite bg-nbwhite group-checked/buttonSelect:text-nborangemain px-2 py-0.5 mb-4 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">Production
                        Assistant</span></label> */}



            </div>
        </div>
    )
}