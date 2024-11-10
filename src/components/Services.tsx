import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

// components/services.tsx
const servicesData = [
  {
    icon: <FaCode size={40} className="mb-4" />,
    title: 'Web Development',
    description: 'High-quality web development services tailored to meet your business needs.',
  },
  {
    icon: <FaPaintBrush size={40} className="mb-4" />,
    title: 'Graphic Design',
    description: 'Creative graphic design solutions to elevate your brand’s visual identity.',
  },
  {
    icon: <FaChartLine size={40} className="mb-4" />,
    title: 'SEO Optimization',
    description: 'Optimize your website for search engines and increase organic traffic.',
  },
];
   
export default function Services() {
  return (
    <div id='services' className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-sans font-bold mb-12"><span className="text-red-900">O</span>ur Services</h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-500 hover:shadow-lg hover:text-white">
              <div className="flex justify-center">
                <div className="text-red-800 hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl text-gray-300 hover:text-black font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-300 hover:text-white transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}
