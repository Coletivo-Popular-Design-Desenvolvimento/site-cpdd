import '../../../../../apps/cpdd-site/src/styles/globals.css';

export default function Typography() {
    return (
        <div className='w-full flex flex-col gap-12'>
            <h1 className="display-lg">Display G</h1>
            <h1 className="display-md">Display M</h1>
            <h1 className="heading-lg">Título G</h1>
            <h1 className="heading-md">Título M</h1>
            <h1 className="heading-sm">Título P</h1>
            <h2 className="subheading-lg">Sub-título G</h2>
            <h2 className="subheading-md">Sub-título M</h2>
            <h2 className="subheading-sm">Sub-título P</h2>
            <button className="button-lg">Botão G</button>
            <button className="button-md">Botão M</button>
            <button className="button-sm">Botão P</button>
            <p className="body-lg">Corpo G</p>
            <p className="body-md">Corpo M</p>
            <p className="body-sm">Corpo P</p>
        </div>
    );
}