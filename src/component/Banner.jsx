import backgroundImage from '../assets/Image/Adopt-Header-2400x667-01.png';

const Banner = () => {
    return (
        <div
            className="hero h-[70vh]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}>
            
        </div>
    );
};


export default Banner;