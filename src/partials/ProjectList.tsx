import { Project, Section, Tags } from 'astro-boilerplate-components';

import { DATA } from '@/utils/resume';

const ProjectList = () => (
  <Section title={<>Dự án của tôi</>}>
    <div className="flex flex-col gap-6">
      {DATA.projects.map((project, index) => (
        <Project
          name={project.name}
          key={index}
          description={project.description}
          link={project.link}
          img={project.img}
          category={
            <>
              {project.category.map((category) => (
                <Tags color={category.color}>{category.name}</Tags>
              ))}
            </>
          }
        />
      ))}
    </div>
  </Section>
);

export { ProjectList };
