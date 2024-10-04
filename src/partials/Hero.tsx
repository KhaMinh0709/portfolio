import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import { DATA } from '@/utils/resume';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={DATA.title}
      description={DATA.description}
      avatar={
        <img
          className="h-80 w-64"
          src={DATA.avatar}
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {DATA.socialButtons.map((socialButton, index) => (
            <a href={socialButton.href} key={index}>
              <HeroSocial src={socialButton.src} alt={socialButton.alt} />
            </a>
          ))}
        </>
      }
    />
  </Section>
);

export { Hero };
