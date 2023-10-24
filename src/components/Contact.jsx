import React from 'react'
import { useState } from 'react'
import Modal from './Modal';


const Contact = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
    const [showModal, setShowModal] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true)
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        fetch("https://getform.io/f/66533563-4b96-4168-9e62-282cbb09f1f8", {
            method: "POST",
            body: data
        }).then(() => {
            setButtonDisabled(false)
            setShowModal(true)
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
        });
    };



    return (
        <>
            {showModal && <Modal setShowModal={setShowModal} />}
            <div id='contact' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
                <h1 className=' py-4 text-4xl font-bold text-center  bg-slate-50 text-slate-900'>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className=' grid md:grid-cols-2 gap-4 w-full py-2 font-medium'>
                        <div className=' flex flex-col'>
                            <label className=' uppercase text-sm py-2'>Name</label>
                            <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' onChange={handleChange} value={formData.name} />
                        </div>
                        <div className=' flex flex-col'>
                            <label className=' uppercase text-sm py-2'>Phone</label>
                            <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" name="phone" onChange={handleChange} value={formData.phone} />
                        </div>
                    </div>
                    <div className=' flex flex-col py-2 font-medium'>
                        <label className=' uppercase text-sm py-2'>Email</label>
                        <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' onChange={handleChange} value={formData.email} />
                    </div>
                    <div className=' flex flex-col py-2 font-medium'>
                        <label className=' uppercase text-sm py-2'>Subject</label>
                        <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' onChange={handleChange} value={formData.subject} />
                    </div>
                    <div className=' flex flex-col py-2 font-medium'>
                        <label className=' uppercase text-sm py-2'>Message</label>
                        <textarea className=' border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' onChange={handleChange} value={formData.message}></textarea>
                    </div>
                    <button disabled={buttonDisabled} className=' bg-slate-900 text-slate-50 mt-4 w-full p-4 rounded-lg text-2xl font-bold'>
                        {buttonDisabled ? 'Sending..' : 'Send Message'}
                    </button>
                </form>
            </div>
        </>
    )
}
export default Contact