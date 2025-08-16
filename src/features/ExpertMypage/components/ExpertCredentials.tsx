import {CirtificationCard, CirtificationEditCard} from '@/components/CirtificationCard';
import { useGetProCertifications } from '@/hooks/useGetProCertifications';
import { useState } from 'react';
import EditIcon from '@/assets/images/pencil.svg';

const ExpertCredentials = () => {
  const [isEditMode, setIsEditMode] = useState(false);



  const {data} = useGetProCertifications();
  const certifications = data?.result.certifications || [];
  console.log(certifications);

  return (
    <div className="mt-16 flex flex-col justify-center items-center">
      {certifications.map((certification, index) => (
        <div key={index} className="mb-4">
          <CirtificationCard CirtificationCode={certification.certificationType} CirtificationDescription={certification.description} imageUrl={certification.imageUrl}/>
          
        </div>
      ))}
      <CirtificationEditCard />
    </div>
  );
};

export default ExpertCredentials;
