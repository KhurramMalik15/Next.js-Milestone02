// components/Projects.tsx
const projectsData = [
  {
    title: 'Portfolio Website',
    description: '"A clean, minimalist personal portfolio website created to showcase my skills and projects. Built with HTML and CSS, it includes interactive elements and an easy-to-navigate layout."',
    image: '../images/portfolio-website.png',
    link: 'https://portfolio-website-silk-nine-71.vercel.app/',
  },
  {
    title: 'Jenkinson-Sea-Life Website',
    description: '"A fully responsive Aquarium website with a user-friendly interface, built with HTML, CSS, Javacsript, Bootstrap and jQuery, it includes interactive elements and an easy-to-navigate layout."',
    image: '../images/jenkinson-SEA-Website.png',
    link: 'https://jenkinson-sea-life.vercel.app/',
  },
  {
    title: 'Fetch Car Model',
    description: '"A simple web application that fetches and displays real-time car data from an external API. Built using JavaScript and Fetch API to retrieve car specifications, pricing, and availability, providing users with up-to-date information on various car models."',
    image: '../images/car-data.png',
    link: 'https://github.com/KhurramMalik15/Fetch-Car-Model-',
  },
  {
    title: 'Furniture Website',
    description: '"A fully responsive Furniture website with a user-friendly interface, built with HTML and CSS. Integrated product filtering, and a simple checkout process to enhance the user experience."',
    image: '../images/furniture-website-clone.png',
    link: 'https://furniture-website-clone.vercel.app/',
  },
  {
    title: 'Student Record Management',
    description: '"A web-based student management system to keep track of student information, including enrollment, grades, and attendance. Built with HTML, CSS, and JavaScript for an easy-to-use interface. Features include data storage, sorting, and easy retrieval of student details."',
    image: '../images/Student-record.png',
    link: 'https://student-record-management.vercel.app/',
  },
  {
    title: 'Form with JS DOM Manipulation',
    description: '"A basic form that uses JavaScript DOM manipulation to validate inputs, display feedback, and dynamically update the page based on user actions."',
    image: '../images/form validation.png',
    link: 'https://form-with-js-dom-manipulation.vercel.app/',
  },
];      


export default function Projects() {
  return (
    <div id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-sans font-bold text-center mb-12"><span className="text-red-900">O</span>ur Projects</h2>
        
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:space-x-8 mb-12 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
            {/* project image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-md w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"/>
        </div>

            {/* project content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
