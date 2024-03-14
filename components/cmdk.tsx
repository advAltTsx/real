import React from 'react';
import { Command } from 'cmdk';
import './vercel.scss';
import { HomeIcon, Notebook, InstagramIcon, FileSearch } from 'lucide-react';
import Link from 'next/link';

export function VercelCMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  const [pages, setPages] = React.useState<string[]>(['home']);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === 'home';

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return;
      }

      if (e.key === 'Backspace') {
        e.preventDefault();
        popPage();
      }
    },
    [inputValue.length, isHome, popPage]
  );

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      }, 100);

      setInputValue('');
    }
  }

  return (
    <div className="vercel">
      <Command
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            bounce();
          }

          if (isHome || inputValue.length) {
            return;
          }

          if (e.key === 'Backspace') {
            e.preventDefault();
            popPage();
            bounce();
          }
        }}
      >
        <div>
          {pages.map((p) => (
            <div key={p} cmdk-vercel-badge="">
              {p}
            </div>
          ))}
        </div>
        <Command.Input
          autoFocus
          placeholder="What do you need?"
          onValueChange={(value) => {
            setInputValue(value);
          }}
        />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {activePage === 'home' && (
            <Home searchProjects={() => setPages([...pages, 'projects'])} />
          )}
          {activePage === 'projects' && <Projects />}
        </Command.List>
      </Command>
    </div>
  );
}

function Home({ searchProjects }: { searchProjects: Function }) {
  return (
    <>
      <Command.Group heading="Pages">
        <Link href={'/'}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
      </Command.Group>
      <Command.Group heading="Projects">
        <Link href={'https://advnote.abhyudaya.xyz'}>
          <Item>
            <Notebook />
            ADVNote
          </Item>
        </Link>
        <Link href={'https://search.abhyudaya.xyz'}>
          <Item>
            <FileSearch />
            ADVSearch
          </Item>
        </Link>
      </Command.Group>
      <Command.Group heading="Socials">
        <Link href={'https://instagram.com/advwastaken'}>
          <Item>
            <InstagramIcon />
            Instagram
          </Item>
        </Link>
      </Command.Group>
    </>
  );
}

function Projects() {
  return (
    <>
      <Item>Project 1</Item>
      <Item>Project 2</Item>
      <Item>Project 3</Item>
      <Item>Project 4</Item>
      <Item>Project 5</Item>
      <Item>Project 6</Item>
    </>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}
