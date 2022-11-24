
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default function CardComponent({title:title,text:text,image:image}){

    return(
            <>
                <Figure.Image src={image.src} width={200} height={200}/>
                <h3>{title}</h3>
                <p>{text}</p>
            </>
    )
}