import '../../../../../apps/cpdd-site/src/styles/globals.css';

export default function Typography() {
    return (
        <div className='w-full flex flex-col gap-12'>
            <p className='text-black display'>Display</p>
            <h1 className='text-black'>Headline 1</h1>
            <h2 className='text-black'>Headline 2</h2>
            <h3 className='text-black'>Headline 3</h3>
            <h4 className='text-black'>Headline 4</h4>
            <h5 className='text-black'>Headline 5</h5>
            <h6 className='text-black'>Headline 6</h6>
            <p className='text-black'>Paragraphy</p>
            <p className="text-black small">Small</p>
        </div>
    );
}