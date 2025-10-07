import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-black mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-black mb-12">Frontend Projects</h1>
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="https://images-porsche.imgix.net/-/media/48BCFD633E0C4894A75B9DAC385AC466_ABAEF121341E4A5C9817D8665BE00DCD_CM21N3BIX0004-02-718-cayman-front?w=999&q=85&auto=format"
              alt="Project 1"
              className="w-full h-50 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Porsche Website 
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                A Porsche website built with Html ,Css and Bootstrap.
              </p>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
  <a href="https://frontend-mock-fxofzfsou-harshilsonars-projects.vercel.app/">View Project</a>    </a>
   <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 ms-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              > <a href="">Github link</a> </a>            
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="https://rcity.in/rcity-admin/brand_logo/westside.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Westside Clone Website
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                A modern  Westside Clone  Website with product cart features.
              </p>
              <a
                href="https://github.com/yourname/ecommerce"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
           <a href="https://frontend-mock-fxofzfsou-harshilsonars-projects.vercel.app/">View Project </a>
              </a>
                <a
                href="https://github.com/harshilsonar/frontend-mock/tree/main"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 ms-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              > <a href="https://github.com/harshilsonar/frontend-mock/tree/main">Github link</a> </a>         
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_K5IDfwWG9G6OXnvJFH7OwjTMOiCzwbFAA&s"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
               Eddie Clone Website
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                A  Eddie-Beaure Clone Website user authentication .
              </p>
              <a
                href="https://github.com/yourname/blog"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
           <a href="https://live-eddiee-git-main-harshilsonars-projects.vercel.app/">View Project</a> 
              </a>
                <a
                href="https://github.com/harshilsonar/live-Eddiee/tree/main"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 ms-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              > <a href="https://github.com/harshilsonar/live-Eddiee/tree/main">Github link</a> </a>         
            </div>
          </motion.div>
</div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5">
  <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-black mb-12">Backend Projects</h1>
               <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMGl8QAo8SpCh_HJ4aia-8agpOdGGSxbKKg&s"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Blog-Authentication
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
               A blog authentication system with secure user sign-up, login, and logout functionality using JWT and password encryption.
              </p>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
  <a href="https://github.com/harshilsonar/blog-auth-?tab=readme-ov-file">Github link</a>  
                 </a>
            </div>
          </motion.div>

               <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8fDA%3D "
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Movie project  
            </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
             A Movie authentication system with secure user sign-up, login, and logout functionality using JWT and password encryption.

              </p>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
     <a href="https://github.com/harshilsonar/movieproject">Github link</a>  
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
