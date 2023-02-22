


function AboutUsItem(props) {
    return (
        <>
            <li className='aboutus__item'>
                <h1 className='aboutus__item__title'>{props.title}</h1>
                <h3 className='aboutus__item__text'>{props.text}</h3>
            </li>
        </>
    );
}

export default AboutUsItem;