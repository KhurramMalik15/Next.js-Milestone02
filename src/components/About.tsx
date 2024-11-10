// components/About.tsx
const About = () => {
  return (
<section id="About">
  <div className="text-white py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-sans font-bold text-center mb-12">
        <span className="text-red-900">A</span>bout Us
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="../images/img-2.png"
            alt="About Us"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-slate-400">
          <p className="text-2xl text-slate-200 mb-4">
            I'am a Front-End Web Developer & Cloud Enthusiast
          </p>
          <p className="text-base mb-4">
            Greetings! I'm <span className="text-slate-200">Muhammad Khurram Malik</span>, a dedicated front-end web developer with a knack for building visually stunning and user-friendly websites. With 6 months of experience, I've honed my skills across multiple technologies:
            <br/><br/>
            💻 Currently, I’m diving into the world of Cloud Applied Generative AI Engineering at GIAIC, where I'm exploring the intersection of AI and cloud technologies to create intelligent, scalable solutions.
            <br/><br/>
            🚀 What drives me? The desire to create meaningful digital experiences, solve complex problems, and constantly evolve in the ever-changing tech landscape. I thrive on collaborating with teams and clients to bring ideas to life, while always staying open to learning and improving.
            <br/><br/>
            If you're looking for a passionate developer who’s excited about both the front-end and the potential of AI.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/KhurramMalik15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-900 border-4 inline-block border-red-900 font-sans text-white py-2 px-4 rounded-lg shadow hover:border-red-900 hover:border-4 hover:bg-transparent transition duration-300"
            >
              View My GitHub
            </a>
            <a 
              href="../images/Khurram CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-4 inline-block border-red-900 font-sans text-white py-2 px-4 rounded-lg shadow hover:bg-red-900 transition duration-300"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div> 
  </div>
</section>
  );
}; 

export default About;