import './Card.css'

const Cards = (props) => {

    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Cards