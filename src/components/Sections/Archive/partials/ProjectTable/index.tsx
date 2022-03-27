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
      {projects.map((project) => (
        <tr key={`${project.name}${project.endDate}`}>
          <Styled.DateCell>{project.endDate.getFullYear()}</Styled.DateCell>
          <Styled.TitleCell>{project.name}</Styled.TitleCell>
          <Styled.CompanyCell visibleFrom="mobileXL">{project.company}</Styled.CompanyCell>
          <Styled.TechCell visibleFrom="tablet">
            <Styled.TechList>
              {project.techstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </Styled.TechList>
          </Styled.TechCell>
          <Styled.CellWithBreakpoint fitContent>
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
          </Styled.CellWithBreakpoint>
        </tr>
      ))}
    </tbody>
  </Styled.Table>
);

export default ProjectTable;
