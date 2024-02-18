import { useCallback } from 'react';
export default function ComponentUseCallBack() {
  const handleClick = useCallback(() => {
    alert("Bouton cliqué !");
  }, []);

  return <Enfant onClic={handleClick} />;
};

const Enfant = ({ onClic }) => {
  return <button className='btn btn-primary' onClick={onClic}>Cliquez-moi</button>;
};
