import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function IndexScreen({ lang }) {
  const information = useMemo(() => {
    if (lang === "es") {
      return {
        name: "Daniel Arol Alonso Cordoba",
        profession: "Desarrollador Full Stack",
        email: "alonsoaroldev@gmail.com",
        phone: "+54 9 3804247056",
        location: "La Rioja, Argentina",
        welcome:
          "¡Bienvenido a mi CV interactivo! Me llamo Daniel y soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Esta página web es mucho más que un currículum tradicional: es una presentación interactiva de mi trayectoria profesional, mis habilidades técnicas y los proyectos que he desarrollado a lo largo de mi carrera. Aquí podrás explorar de forma dinámica mi experiencia, conocer mis competencias técnicas y descubrir los proyectos que reflejan mi pasión por el desarrollo de software. Te invito a navegar por las diferentes secciones utilizando las pestañas para conocer más sobre mi formación, experiencia laboral y las tecnologías que domino.",
        aboutMe:
          "Como desarrollador Full Stack, me especializo en crear soluciones tecnológicas completas, desde el diseño de interfaces de usuario hasta el desarrollo de sistemas backend robustos. Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando las mejores prácticas de desarrollo. Me mantengo constantemente actualizado con las últimas tendencias tecnológicas y disfruto enfrentando nuevos desafíos que me permitan crecer profesionalmente.",
        experience: [
          {
            company: "FREELANCER",
            location: "Remoto",
            period: "Agosto 2024 - Actualidad",
            description:
              "Desarrollo de proyectos web y móviles como freelancer para diversos clientes.",
            current: true,
          },
          {
            company: "BLUEVERSE",
            location: "Texas (USA)",
            period: "Octubre 2023 - Agosto 2024",
            description: "Desarrollo de aplicaciones web y móvil.",
            current: false,
          },
          {
            company: "NO NERDS NO PROBLEM",
            location: "New York (USA)",
            period: "Julio 2022 - Octubre 2023",
            description: "Desarrollo de aplicaciones web y móvil.",
            current: false,
          },
          {
            company: "LOTESEUER",
            location: "La Rioja (ARG)",
            period: "Abril 2020 - Mayo 2022",
            description:
              "Desarrollo, despliegue y mantenimiento de aplicación de escritorio.",
            current: false,
          },
        ],
        education: [
          {
            degree: "Ingeniería en Sistemas",
            institution: "Universidad Marina Mercante",
            location: "Buenos Aires, Argentina",
            period: "Enero 2024 - Actualidad",
            status: "En curso",
            progress: "10%",
            current: true,
          },
          {
            degree: "Tecnicatura Universitaria en Programación",
            institution: "Universidad Tecnológica Nacional (UTN)",
            location: "La Rioja Capital, Argentina",
            period: "Abril 2021 - Abril 2023",
            status: "Completada",
            progress: "90%",
            current: false,
          },
        ],
        courses: [
          {
            title: "Universidad Javascript",
            provider: "Global Mentoring (Udemy)",
            image:
              "https://www.globalmentoring.com.mx/images/javascript-udemy.png",
            completed: true,
          },
          {
            title: "Universidad del Desarrollo Web",
            provider: "Global Mentoring (Udemy)",
            image:
              "https://img-c.udemycdn.com/course/480x270/3895716_00dc_10.jpg",
            completed: true,
          },
          {
            title: "SQL",
            provider: "Numpi Cursos (Udemy)",
            image:
              "https://img-c.udemycdn.com/course/240x135/3756262_f347_21.jpg",
            completed: true,
          },
          {
            title: "CSS",
            provider: "Udemy",
            image: "https://img-c.udemycdn.com/course/240x135/5206962_8bf4.jpg",
            completed: true,
          },
          {
            title: "Universidad Python",
            provider: "Global Mentoring (Udemy)",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1SbVksSBUwxg7-rtPk0NuMAKi9XCg1LPZQ&s",
            completed: true,
          },
          {
            title: "GIT+GITHUB Todo un sistema de control de versiones",
            provider: "Fernando Herrera (Udemy)",
            image:
              "https://res.cloudinary.com/dl1k2dee0/image/upload/w_700,h_400,f_webp/v1720472287/courses/git-github/banner/git-github.jpg",
            completed: true,
          },
        ],
        projects: [
          {
            name: "Fotos Posadass",
            description:
              "Plataforma web para servicios de fotografía profesional especializada en eventos, retratos y sesiones fotográficas.",
            url: "https://www.fotosposadas.com.ar",
            technologies: ["React", "Node.js", "MongoDB"],
            status: "Activo",
            type: "Aplicación Web",
            image: "/mycv/cv/logoposada.png",
          },
        ],
      };
    } else {
      return {
        name: "Daniel Arol Alonso Cordoba",
        profession: "Full Stack Developer",
        email: "alonsoaroldev@gmail.com",
        phone: "+54 9 3804247056",
        location: "La Rioja, Argentina",
        welcome:
          "Welcome to my interactive CV! My name is Daniel and I'm a Full Stack developer passionate about creating exceptional digital experiences. This website is much more than a traditional resume: it's an interactive presentation of my professional journey, technical skills, and projects I've developed throughout my career. Here you can dynamically explore my experience, learn about my technical competencies, and discover projects that reflect my passion for software development. I invite you to navigate through the different sections using the tabs to learn more about my education, work experience, and the technologies I master.",
        aboutMe:
          "As a Full Stack developer, I specialize in creating complete technological solutions, from user interface design to developing robust backend systems. My approach focuses on writing clean, scalable, and maintainable code, always seeking development best practices. I constantly stay updated with the latest technological trends and enjoy face new challenges that allow me to grow professionally.",
        experience: [
          {
            company: "FREELANCER",
            location: "Remote",
            period: "August 2024 - Present",
            description:
              "Development of web and mobile projects as freelancer for various clients.",
            current: true,
          },
          {
            company: "BLUEVERSE",
            location: "Texas (USA)",
            period: "October 2023 - August 2024",
            description: "Development of web and mobile applications.",
            current: false,
          },
          {
            company: "NO NERDS NO PROBLEM",
            location: "New York (USA)",
            period: "July 2022 - October 2023",
            description: "Development of web and mobile applications.",
            current: false,
          },
          {
            company: "LOTESEUER",
            location: "La Rioja (ARG)",
            period: "April 2020 - May 2022",
            description:
              "Development, deployment and maintenance of desktop application.",
            current: false,
          },
        ],
        education: [
          {
            degree: "Systems Engineering",
            institution: "Marina Mercante University",
            location: "Buenos Aires, Argentina",
            period: "January 2024 - Present",
            status: "In progress",
            progress: "10%",
            current: true,
          },
          {
            degree: "University Technician in Programming",
            institution: "National Technological University (UTN)",
            location: "La Rioja Capital, Argentina",
            period: "April 2021 - April 2023",
            status: "Completed",
            progress: "90%",
            current: false,
          },
        ],
        courses: [
          {
            title: "Javascript University",
            provider: "Global Mentoring (Udemy)",
            image:
              "https://www.globalmentoring.com.mx/images/javascript-udemy.png",
            completed: true,
          },
          {
            title: "Web Development University",
            provider: "Global Mentoring (Udemy)",
            image:
              "https://img-c.udemycdn.com/course/480x270/3895716_00dc_10.jpg",
            completed: true,
          },
          {
            title: "SQL",
            provider: "Numpi Cursos (Udemy)",
            image:
              "https://img-c.udemycdn.com/course/240x135/3756262_f347_21.jpg",
            completed: true,
          },
          {
            title: "CSS",
            provider: "Udemy",
            image: "https://img-c.udemycdn.com/course/240x135/5206962_8bf4.jpg",
            completed: true,
          },
          {
            title: "Python University",
            provider: "Global Mentoring (Udemy)",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1SbVksSBUwxg7-rtPk0NuMAKi9XCg1LPZQ&s",
            completed: true,
          },
          {
            title: "GIT+GITHUB Complete version control system",
            provider: "Fernando Herrera (Udemy)",
            image:
              "https://res.cloudinary.com/dl1k2dee0/image/upload/w_700,h_400,f_webp/v1720472287/courses/git-github/banner/git-github.jpg",
            completed: true,
          },
        ],
        projects: [
          {
            name: "Fotos Posadas",
            description:
              "Professional photography services web platform specialized in events, portraits and photo sessions.",
            url: "https://www.fotosposadas.com.ar",
            technologies: ["React", "Node.js", "MongoDB"],
            status: "Active",
            type: "Web Application",
            image: "/mycv/cv/logoposada.png",
          },
        ],
      };
    }
  }, [lang]);

  return (
    <div class="min-h-screen bg-transparent py-12 px-4 container m-auto">
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div class="shrink-0">
              <img
                src="/mycv/cv/arol.jpeg"
                alt="Foto de perfil"
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-200"
              />
            </div>

            <div class="flex-1 text-center md:text-left">
              <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {information.name}
              </h1>
              <h2 class="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {information.profession}
              </h2>
              <div class="flex flex-col flex-wrap gap-4 justify-center md:justify-start text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-4 text-sm">
                  <Mail className="h-4 w-4" /> {information.email}
                </span>
                <span className="flex items-center gap-4 text-sm">
                  <Phone className="h-4 w-4" /> {information.phone}
                </span>
                <span className="flex items-center gap-4 text-sm">
                  <MapPin className="h-4 w-4" /> {information.location}
                </span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="init">
                {lang === "es" ? "Inicio" : "Home"}
              </TabsTrigger>
              <TabsTrigger value="about">
                {lang === "es" ? "Sobre mí" : "About me"}
              </TabsTrigger>
              <TabsTrigger value="skills">
                {lang === "es" ? "Habilidades" : "Skills"}
              </TabsTrigger>
              <TabsTrigger value="projects">
                {lang === "es" ? "Proyectos" : "Projects"}
              </TabsTrigger>
              <TabsTrigger value="education">
                {lang === "es" ? "Educación" : "Education"}
              </TabsTrigger>
              <TabsTrigger value="experience">
                {lang === "es" ? "Experiencia" : "Experience"}
              </TabsTrigger>
              <TabsTrigger value="cursos">
                {lang === "es" ? "Cursos" : "Courses"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="init">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {lang === "es" ? "Bienvenido" : "Welcome"}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {information.welcome}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div class="mb-6">
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {information.aboutMe}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex flex-wrap gap-2">
                <span className="w-40 flex items-center gap-5 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <FaReact className="w-6 h-6" />
                  </span>
                  React
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <FaReact className="w-6 h-6" />
                  </span>
                  React Native
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <SiTypescript className="w-6 h-6" />
                  </span>
                  Typescript
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <IoLogoJavascript className="w-6 h-6" />
                  </span>
                  Javascript
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <FaNode className="w-6 h-6" />
                  </span>
                  Node .JS
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <SiMysql className="w-6 h-6" />
                  </span>
                  MySQL
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <SiMongodb className="w-6 h-6" />
                  </span>
                  MongoDB
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <SiPostgresql className="w-6 h-6" />
                  </span>
                  PostgreSQL
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <FaPython className="w-6 h-6" />
                  </span>
                  Python
                </span>
                <span className="w-40 flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <span className="w-8">
                    <FaGitAlt className="w-6 h-6" />
                  </span>
                  Git
                </span>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6">
                {information.education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0"
                  >
                    {/* Dot indicator */}
                    <div
                      className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
                        edu.current
                          ? "bg-green-500 border-green-500 animate-pulse"
                          : "bg-blue-500 border-blue-500"
                      }`}
                    ></div>

                    {/* Education content */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h4>
                          <h5 className="text-md font-medium text-blue-700 dark:text-blue-300 mb-2">
                            {edu.institution}
                          </h5>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.period}
                        </span>
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              edu.current
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : edu.status === "Completada" ||
                                  edu.status === "Completed"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                            }`}
                          >
                            {edu.status}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {edu.progress}{" "}
                            {lang === "es" ? "realizado" : "completed"}
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            edu.current ? "bg-green-500" : "bg-blue-500"
                          }`}
                          style={{ width: edu.progress }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="experience">
              <div className="space-y-6">
                {information.experience.map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0"
                  >
                    {/* Dot indicator */}
                    <div
                      className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
                        job.current
                          ? "bg-green-500 border-green-500 animate-pulse"
                          : "bg-blue-500 border-blue-500"
                      }`}
                    ></div>

                    {/* Job content */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {job.company}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            job.current
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          }`}
                        >
                          {job.current
                            ? lang === "es"
                              ? "Actual"
                              : "Current"
                            : job.period}
                        </span>
                        {job.current && (
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {job.period}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cursos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {information.courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Course image */}
                    <div className="h-32 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Course content */}
                    <div className="p-4">
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3rem]">
                        {course.title}
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                        {course.provider}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            course.completed
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                        >
                          {course.completed
                            ? lang === "es"
                              ? "Completado"
                              : "Completed"
                            : lang === "es"
                            ? "En progreso"
                            : "In progress"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {information.projects?.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="aspect-video overflow-hidden bg-white">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {project.name}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded font-medium ${
                            project.status === "Activo" ||
                            project.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
                        {project.type}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded dark:bg-blue-800 dark:text-blue-100 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {lang === "es" ? "Ver proyecto" : "View project"}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
