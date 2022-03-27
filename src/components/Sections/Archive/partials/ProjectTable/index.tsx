import React from 'react';
import IconLink from '@components/IconLink';
import { FluidObject } from 'gatsby-image';
import Styled from './style';

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

const ProjectTable: React.FunctionComponent<ProjectTableProps> = ({ projects }) => (
  <Styled.Table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((project) => (
        <tr key={`${project.name}${project.endDate}`}>
          <Styled.DateCell>{project.endDate.getFullYear()}</Styled.DateCell>
          <Styled.TitleCell>{project.name}</Styled.TitleCell>
          <Styled.RegularCell>
            <Styled.LinkContainer>
              {project.links?.map((link) => (
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
              ))}
            </Styled.LinkContainer>
          </Styled.RegularCell>
        </tr>
      ))}
    </tbody>
  </Styled.Table>
);

export default ProjectTable;
