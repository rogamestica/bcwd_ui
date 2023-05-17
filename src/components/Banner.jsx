const Banner = (props) => {

    const title = props.title;

    return (
        <section className="banner">

            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white' style={{ letterSpacing: '3px' }}>
                    <h1 className='mb-3' style={{ color: 'white' }}>{title}</h1>
                </div>
            </div>
        </section>
    );

}

export default Banner;