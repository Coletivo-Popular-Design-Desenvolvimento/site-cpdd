import '../../../../../apps/cpdd-site/src/styles/globals.css';

export default function Palette() {
    return (
        <div className='w-full grid grid-rows-10 gap-4'>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-neutral-50'></div>
                <div className='shadow-sm bg-cpdd-neutral-200'></div>
                <div className='shadow-sm bg-cpdd-neutral-400'></div>
                <div className='shadow-sm bg-cpdd-neutral-500'></div>
                <div className='shadow-sm bg-cpdd-neutral-700'></div>
                <div className='shadow-sm bg-cpdd-neutral-950'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-green-50'></div>
                <div className='shadow-sm bg-cpdd-green-500'></div>
                <div className='shadow-sm bg-cpdd-green-800'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-cyan-100'></div>
                <div className='shadow-sm bg-cpdd-cyan-300'></div>
                <div className='shadow-sm bg-cpdd-cyan-500'></div>
                <div className='shadow-sm bg-cpdd-cyan-800'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-blue-100'></div>
                <div className='shadow-sm bg-cpdd-blue-500'></div>
                <div className='shadow-sm bg-cpdd-blue-900'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-purple-100'></div>
                <div className='shadow-sm bg-cpdd-purple-400'></div>
                <div className='shadow-sm bg-cpdd-purple-800'></div>
                <div className='shadow-sm bg-cpdd-purple-950'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-red-100'></div>
                <div className='shadow-sm bg-cpdd-red-500'></div>
                <div className='shadow-sm bg-cpdd-red-800'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-orange-100'></div>
                <div className='shadow-sm bg-cpdd-orange-300'></div>
                <div className='shadow-sm bg-cpdd-orange-500'></div>
                <div className='shadow-sm bg-cpdd-orange-700'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-yellow-50'></div>
                <div className='shadow-sm bg-cpdd-yellow-500'></div>
                <div className='shadow-sm bg-cpdd-yellow-700'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-3'>
                <div className='shadow-sm bg-cpdd-gradient-cyan'></div>
                <div className='shadow-sm bg-cpdd-gradient-orange'></div>
                <div className='shadow-sm bg-cpdd-gradient-purple'></div>
                <div className='shadow-sm bg-cpdd-gradient-yellow'></div>
            </div>
            <div className='h-14 grid grid-cols-6 gap-1'>
                <div className='shadow-sm bg-cpdd-gradient-orange-cyan'></div>
                <div className='shadow-sm bg-cpdd-gradient-orange-purple'></div>
                <div className='shadow-sm bg-cpdd-gradient-orange-yellow'></div>
            </div>
        </div>
    );        
}