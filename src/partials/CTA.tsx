import { Newsletter, Section } from 'astro-boilerplate-components';

import { DATA } from '@/utils/resume';

const CTA = () => (
  <Section>
    <Newsletter
      title={DATA.footer.title}
      description={DATA.footer.description}
    />
  </Section>
);

export { CTA };
