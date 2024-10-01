import styles from './Button.module.css';
import  { MdMessage } from 'react-icons/md';
const Button = (props) =>{
    const {isOutline,icon,text, ...rest}=props;
    return <Button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        <MdMessage fontSize='24px' />
        {text}
        {icon}
    </Button>
}
export default Button;