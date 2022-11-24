import ListGroup from 'react-bootstrap/ListGroup';
import menuItems from './menuComponents.json'

const getMenuItems = () => {
    
    var listItems = []
    menuItems.forEach(item => { 
        listItems.push(<ListGroup.Item>{item.field}</ListGroup.Item>);
    })

    return listItems;
}

function HorizontalResponsiveExample() {
  return (
    <>
        <ListGroup horizontal>
            {getMenuItems()}
        </ListGroup>
      
    </>
  );
}

export default HorizontalResponsiveExample;