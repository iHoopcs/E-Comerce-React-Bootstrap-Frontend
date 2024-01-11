import './Products/Products.css';

export default function Footer() {
    return (
        <>
            
            <footer className='bg-dark py-5 mt-5'>

                <div className='container d-flex justify-content-between '>
                    <div className='text-white'>
                        <h5 className='mb-4'>Coding Technologies</h5>
                        <p className='text-muted'>ReactJS</p>
                        <p className='text-muted'>Java</p>
                        <p className='text-muted'>MySQL</p>
                    </div>
                    
                    <div className='text-white '>
                        <h5 className='mb-4'>Socials</h5>
                        <p className='text-muted'>csimmons6@broncos.uncfsu.edu</p>
                        <p className='text-muted'><a href='https://github.com/iHoopcs'>Github</a></p>
                        <p className='text-muted'><a href='https://www.linkedin.com/in/caleb-simmons-aa8766239/'>LinkedIn</a></p>
                    </div>
                </div>

            </footer>
        </>
    ); 
}
    
