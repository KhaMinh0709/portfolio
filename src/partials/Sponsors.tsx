import { Section } from 'astro-boilerplate-components';

const Sponsors = () => (
  <Section title="Kỹ năng">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <img
                src={
                  'https://api.lilly021.com/wp-content/uploads/2019/07/springBoot_featured_image.png'
                }
                alt="Sentry"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="#" target="_blank">
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI1yTWEJhL2OoD4f-5JxhUcxPA-AVikenrA&s'
                }
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextlessjs.com">
              <img
                src={
                  'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
                }
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
              target="_blank"
            >
              <img
                src={
                  'https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png'
                }
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://turso.tech/?utm_source=nextjsstarterbp"
              target="_blank"
            >
              <img
                src={
                  'https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem-700x394.png'
                }
                alt="SQLite Developer Experience"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://l.crowdin.com/next-js" target="_blank">
              <img
                src={
                  'https://wallpapers.com/images/hd/git-hub-logo-octocat-character-4lsy0bw5blp4xwgv-2.png'
                }
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
