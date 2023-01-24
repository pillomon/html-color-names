import ExLink from '@/components/atoms/exlink';
import { BsGithub } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="fixed left-0 bottom-0 w-full h-auto bg-[#10172a] z-10">
      <div className="w-full h-auto max-w-5xl mx-auto my-0 flex items-center justify-between">
        <address className="text-[#fffeee] py-5">
          Copyright 2023. Supisa. All rights reserved.
        </address>
        <nav>
          <ul className="flex align items-center justify-center gap-4">
            <li>
              <ExLink
                url={'https://github.com/supisa-dev'}
                Icon={BsGithub}
                color={'#F0F3F6'}
              />
            </li>
            <li>
              <ExLink
                url={'https://open.kakao.com/o/gsWOCiZe'}
                Icon={RiKakaoTalkFill}
                color={'#F1D100'}
              />
            </li>
            <li>
              <ExLink
                url={'https://blog.naver.com/lucy-pill'}
                Icon={SiNaver}
                color={'#03CF5B'}
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
