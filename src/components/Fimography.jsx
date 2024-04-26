import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'


export function Filmography({ sendData }) {

    const titleOptions = [
        { value: 'screenwriter', label: 'Screenwriter' },
        { value: 'director', label: 'Director' },
        { value: 'assistant director', label: 'Assistant director' },
        { value: 'camera assistant', label: 'Camera assistant' },
        { value: 'cameraman', label: 'Cameraman' },
        { value: 'music composer', label: 'Music composer' },
        { value: 'gaffer', label: 'Gaffer' },
        { value: 'production assistant', label: 'Production assistant' },
        { value: 'sound mixer', label: 'Sound mixer' },
        { value: 'boom operator', label: 'Boom operator' },
        { value: 'editor', label: 'Editor' },
        { value: 'director of photography', label: 'Director of photography' },
        { value: 'actor', label: 'Actor' },
        { value: 'set designer', label: 'Set designer' },]

    function sendFilmData() {
        const data = {
            title: title,
            year: year,
            image: img,
            role: role
        }
        console.log(data);
        sendData(data);
    }
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [img, setImg] = useState();
    const [role, setRole] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const hiddenInput = useRef(null)

    function attachImage() {
        hiddenInput?.current?.click()
    }



    return (
        <section>
            <p>Please add your filmography</p>
            <div>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
                <Select options={titleOptions} placeholder='your role int the movie' onChange={(choice) => setRole(choice.value)}></Select>
                <button onClick={() => { attachImage() }} type="button">attach image</button>
                <input type="file" onChange={e => setImg(e.target.files[0])} ref={hiddenInput} className='hidden' />
                <input type='button' onClick={() => sendFilmData()} value="Add"></input>
            </div>
        </section>
    )
}