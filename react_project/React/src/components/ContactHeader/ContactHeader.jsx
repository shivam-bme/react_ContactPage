import styles from './ContactHeader.module.css';
const ContactHeader = () => {
    return (
        <div className={`container ${styles.Contact_section}`}>
            <h1>Contact Avengers</h1>
            <p>
                Let's connect : we are here to help you
            </p>

        </div>
    )
}

export default ContactHeader;