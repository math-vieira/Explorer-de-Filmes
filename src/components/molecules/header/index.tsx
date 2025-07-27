import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-3 shadow-sm">
      <Link href="/">
        <Image
          src={logo.src}
          alt="logo"
          width={100}
          height={100}
          className="transition-transform duration-200 hover:scale-110"
        />
      </Link>
      <div>
        <a
          href="https://github.com/ymath-xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black transition-colors duration-200 hover:text-gray-800"
        >
          <FaGithubSquare size={24} />
          <span className="font-medium">Matheus Vieira</span>
        </a>
      </div>
    </header>
  );
};
