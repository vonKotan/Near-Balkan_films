import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { useUploadImage } from '../hooks/useUploadImage'


export function Filmography({ sendData, user }) {

    const { uploadImage } = useUploadImage(user)

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

    async function sendFilmData() {
        if (validateData()) {
            const url = await uploadImage(image, title);
            const data = {
                title: title,
                year: year,
                image: url,
                role: role
            }
            console.log(data);
            sendData(data);
        }
    }
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [image, setImage] = useState();
    const [role, setRole] = useState("")
    const [errorMesage, setErrorMessage] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const hiddenInput = useRef(null)

    function attachImage() {
        hiddenInput?.current?.click()
    }

    function validateData() {
        if (!image || !title || !year || !role) {
            setErrorMessage("please fill out all fields to add to your filmography")
            return false
        }
        setErrorMessage('');
        return true
    }



    return (
        <section>
            <p>Please add your filmography</p>
            <div>
                {errorMesage && <p>{errorMesage}</p>}
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
                <Select options={titleOptions} placeholder='your role int the movie' onChange={(choice) => setRole(choice.value)}></Select>
                <button onClick={() => { attachImage() }} type="button">attach image</button>
                <input type="file" onChange={e => setImage(e.target.files[0])} ref={hiddenInput} className='hidden' />
                <input type='button' onClick={() => sendFilmData()} value="Add"></input>
            </div>
        </section>
    )
}