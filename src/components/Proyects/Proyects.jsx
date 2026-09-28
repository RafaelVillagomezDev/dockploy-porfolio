import React from 'react';
import { 
  ProyectsSection, 
  ProyectTitle, 
  ProyectGrid, 
  ProyectCard, 
  ImageWrapper, 
  ProjectImage, 
  TextContent, 
  CardTitle, 
  CardDescription, 
  ButtonsWrapper, 
  GithubButton, 
  LiveButton 
} from './styles/Proyects';
import { proyects } from '../../proyects'; 

function Proyects() {
  return (
    <ProyectsSection>
      <ProyectTitle>Proyectos</ProyectTitle>

      <ProyectGrid>
        {proyects.map((card) => {
          return (
            <ProyectCard key={card.id}>
              
            
              <ImageWrapper 
                as={card.website ? "a" : "div"} 
                href={card.website || undefined} 
                target={card.website ? "_blank" : undefined}
                rel={card.website ? "noopener noreferrer" : undefined}
              >
                <ProjectImage 
                  src={card.thumbnail} 
                  alt={card.alt} 
                />
              </ImageWrapper>

              <TextContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </TextContent>
              
              <ButtonsWrapper>
               
                {card.linkGithub && (
                  <GithubButton 
                    href={card.linkGithub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </GithubButton>
                )}
                
         
                {card.website && (
                  <LiveButton 
                    href={card.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver Página
                  </LiveButton>
                )}
              </ButtonsWrapper>

            </ProyectCard>
          );
        })}
      </ProyectGrid>
    </ProyectsSection>
  );
}

export default Proyects;