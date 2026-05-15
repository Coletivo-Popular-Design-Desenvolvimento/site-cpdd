export default function WaveDivider ({
    backgroundClassName,
    className,
    widthClassName,
    yPosition,
    xPosition,
}: {
    backgroundClassName: string;
    className: string;
    widthClassName: string;
    xPosition: 'left' | 'right';
    yPosition: 'bottom' | 'top';
}) {
    const positionClassNames: string[] = [];
    if (yPosition === 'top') {
        positionClassNames.push('-scale-y-100');
    }
    if (xPosition === 'right') {
        positionClassNames.push('-scale-x-100');
    }
    const positionClassName = positionClassNames.join(' ');

    return (
        <div className={`${className} ${positionClassName} flex`}>
            <div className={`h-full ${widthClassName} ${backgroundClassName}`} />
            <div className={`h-full clip-wave-right ${backgroundClassName}`} />
        </div>
    );
}
