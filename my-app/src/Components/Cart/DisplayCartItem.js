
export default function DisplayCartItem(props){
    const {item} = props;
    return(
        <>
            <div className='container'>
                <div className='row just'>
                    <div className='col-9'>
                        <div className='d-flex'>
                            <div className='card mb-5 mx-5 mt-4'>
                                <img src={item.imageUrl} alt={item.name} />
                            </div>

                            <div className='mt-5 mx-4' >
                                <h5>{item.brand} {item.name}</h5>
                                <p className='text-muted'>${item.price}</p>
                            </div>
                        </div>

                    </div>

                    <div className='col mt-5'>
                        <div>
                            <button className='btn btn-secondary mx-2 '>+</button>
                            <button className='btn btn-danger '>-</button>
                        </div>
                    </div>
                </div>

            </div>




        </>
    );
}