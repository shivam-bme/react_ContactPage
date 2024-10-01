import Button from '../Button/Button';
import styles from './Contact.module.css'
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

import { HiMail } from 'react-icons/hi'
import { useState } from 'react';
const Contact = () => {
    const [name,setName]=useState('Shivam'); //state hook to re render variable name 
    const [email,setEmail]=useState('Shivam@gmail.com');
    const [text,setText]=useState("shivam's text");
    
    const onViacall=()=>{
        console.log('i am calling');
    }
    const onSubmit = (event)=>{
        event.preventDefault(); // to prevent page refresh
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        console.log({name,email,text});
    }
    return <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
            <Button text='VIA SUPPORT CHAT'  icon={<MdMessage fontSize='24px'/>}/>
            <Button  onClick={onViacall} text='VIA CALL'  icon={<FaPhoneAlt fontSize='24px'/>}/></div>
            <div><Button  isOutline={true} text='VIA mail'  icon={<HiMail fontSize='24px'/>}/></div>
            <form>
                <div className={styles.form_control}>
                <input type='text' name='name'></input>
                <label htmlFor='name'>Name</label>
                </div>
                <div className={styles.form_control}>
                <input type='email' name='email'></input>
                <label htmlFor='email'>Email</label>
                </div>
                <div className={styles.form_control}>
                <textarea name='text'  rows='10'/>
                <label htmlFor='text'>Text</label>
                </div>
                <div style={{display:'flex', justifyContent: 'center',}}>
                <Button  onClick={onSubmit} isOutline={true} text="Submit" /></div>
                <div>name + " " +email +  " " + text </div>
            </form>
                
        </div>
        <div className={styles.contactImage}>
            <img src="" alt="contact image" />
        </div>
    </section>;
}

export default Contact;