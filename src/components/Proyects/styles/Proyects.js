import styled from 'styled-components';

export const ProyectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 2.5rem; 
  width: 100%; 
  max-width: 900px; 
  margin: 0 auto; 
`;

export const ProyectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 3rem 1.5rem; 
  max-width: 1200px;
  margin: 0 auto; 
  gap: 3rem; 
  position: relative; 
  z-index: 1; 

  @media (min-width: 768px) {
    padding: 5rem 2rem; 
  }
`;

export const ProyectTitle = styled.h2`
  font-size: 24px;
  color: #47d16e;
  font-weight: 500;
  margin: 0; 
  text-align: center;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;


export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; 
  overflow: hidden;
  display: block; 
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: top; 
  display: block;
`;


export const ProyectCard = styled.div`
  background-color: #1f1f21; 
  border: 1px solid rgba(255, 255, 255, 0.08); 
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); 
  border-radius: 16px;
  overflow: hidden; 
  display: flex;
  flex-direction: column; 
  height: 100%; 
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.15); 
  }
  

`;



/* --- 2. SECCIÓN TEXTO --- */
export const TextContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1; 
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #ffffff; 
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #a1a1aa; 
  line-height: 1.6;
  margin: 0;
`;

/* --- 3. SECCIÓN BOTONES --- */
export const ButtonsWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between; 
  border-top: 1px solid rgba(255, 255, 255, 0.08); 
`;

const BaseButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  flex: 1; 
  transition: all 0.3s ease;
  
`;

export const GithubButton = styled(BaseButton)`
  background-color: #313338; 
  color: #ffffff;

  &:hover {
    background-color: #3f4147;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const LiveButton = styled(BaseButton)`
  background-color: #47d16e;
  color: #1f1f21; 

  &:hover {
    background-color: #3bb35c;
    box-shadow: 0 6px 15px rgba(71, 209, 110, 0.2);
  }
`;