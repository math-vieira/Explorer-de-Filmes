import { FaGithub, FaLinkedin } from 'react-icons/fa';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center justify-between gap-4 bg-white px-5 py-3 shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)] sm:flex-row sm:gap-0">
      <div className="flex items-center gap-4">
        <span className="text-center text-sm text-gray-600 sm:text-left">
          © {getCurrentYear()} Explorer de Filmes. Todos os direitos
          reservados.
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Desenvolvido por</span>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ymath-xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-900"
          >
            <FaGithub size={16} />
            <span>Matheus Vieira</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ymath-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-900"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
