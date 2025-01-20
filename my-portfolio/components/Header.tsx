// components/Header.tsx
import Image from 'next/image'; 

const Header = () => {
    return (
        <div className="flex items-center justify-center text-white">
            <header className="flex items-center justify-around py-20 w-full max-w-4xl">
                <Image 
                    src="/img/pp.jpg" 
                    alt="Profile Picture"
                    width={200} 
                    height={200} 
                    className="rounded-full mx-4" 
                />
                <div className="text-left">
                    <h1 className="text-4xl font-semibold">Tristan Monahan</h1>
                    <p className="text-lg mt-2">Web Developer</p>
                    <p className="mt-4"><a href="mailto:tmona64@gmail.com" className="underline">tmona64@gmail.com</a></p>
                </div>
            </header>
        </div>
    );
};

export default Header;