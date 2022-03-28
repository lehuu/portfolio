import React, { useState } from 'react';
import IconLink from '@components/IconLink';
import { FluidObject } from 'gatsby-image';
import Styled from './style';
import { ProjectDetail } from './partials';

interface ProjectTableProps {
  projects: {
    name: string;
    description: string;
    company?: string;
    techstack: string[];
    image: FluidObject | FluidObject[];
    endDate: Date;
    links?: { type: string; link: string }[];
  }[];
}

const ProjectTable: React.FunctionComponent<ProjectTableProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>();

  const handleSelectProject = (selected: number) => {
    setSelectedProject((curr) => (curr === selected ? null : selected));
  };

  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.CellWithBreakpoint as="th">Year</Styled.CellWithBreakpoint>
          <Styled.CellWithBreakpoint as="th">Title</Styled.CellWithBreakpoint>
          <Styled.CellWithBreakpoint as="th" visibleFrom="mobileXL">
            Made at
          </Styled.CellWithBreakpoint>
          <Styled.CellWithBreakpoint as="th" visibleFrom="tablet">
            Built with
          </Styled.CellWithBreakpoint>
          <Styled.CellWithBreakpoint as="th">Link</Styled.CellWithBreakpoint>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <>
            <tr
              key={`${project.name}${project.endDate}`}
              onClick={() => handleSelectProject(index)}
            >
              <Styled.DateCell>{project.endDate.getFullYear()}</Styled.DateCell>
              <Styled.TitleCell>{project.name}</Styled.TitleCell>
              <Styled.CompanyCell visibleFrom="mobileXL">
                {project.company ?? '\u23AF'}
              </Styled.CompanyCell>
              <Styled.TechCell visibleFrom="tablet">
                <Styled.TechList>
                  {project.techstack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </Styled.TechList>
              </Styled.TechCell>
              <Styled.CellWithBreakpoint fitContent>
                <Styled.LinkContainer>
                  {project.links
                    ? project.links.map((link) => (
                        <li key={link.link}>
                          <IconLink
                            size="l"
                            type={
                              link.type.toLocaleLowerCase() === 'github'
                                ? 'githubOutline'
                                : (link.type as any)
                            }
                            link={link.link}
                          />
                        </li>
                      ))
                    : '\u23AF'}
                </Styled.LinkContainer>
              </Styled.CellWithBreakpoint>
            </tr>
            {selectedProject != null && selectedProject === index && (
              <Styled.ProjectCardRow>
                <td colSpan={5}>
                  <ProjectDetail image={project.image} description={project.description} />
                </td>
              </Styled.ProjectCardRow>
            )}
          </>
        ))}
      </tbody>
    </Styled.Table>
  );
};

export default ProjectTable;
