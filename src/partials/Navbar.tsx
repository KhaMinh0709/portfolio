import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

import { DATA } from '@/utils/resume';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <div className="flex items-end bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
          {DATA.logo.logo}
          {DATA.logo.name}
        </div>
      </a>

      <NavMenu>
        {DATA.menus.map((menu, index) => (
          <NavMenuItem key={index} href={menu.href}>
            {menu.name}
          </NavMenuItem>
        ))}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
