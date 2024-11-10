// components/Hero.tsx
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
    >
      <div className="absolute inset-0 bg-black opacity-70">
        <div className="container mx-auto flex flex-col justify-center h-full text-white px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-sans ml-0 sm:ml-12 md:ml-24 lg:ml-72">
            <span>Hello,<br /> My Name is <span className="text-red-500">Muhammad <br/>Khurram </span>Malik</span>
          </h1>
          
          {/* Button */}
          <a
            href="#projects"
            className="cta mt-4 ml-0 sm:ml-12 md:ml-24 lg:ml-72 border-4 inline-block border-red-800 font-sans text-xl sm:text-2xl md:text-3xl font-bold py-2 px-4 rounded transition-all max-w-full sm:max-w-40 hover:bg-red-800 hover:text-white">
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  