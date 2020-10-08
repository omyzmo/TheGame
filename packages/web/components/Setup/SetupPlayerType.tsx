import { MetaButton, MetaHeading } from '@metafam/ds';
import { FlexContainer } from 'components/Container';
import { SetupContext } from 'contexts/SetupContext';
import React, { useContext } from 'react';

export const SetupPlayerType: React.FC = () => {
  const { onNextPress, nextButtonLabel } = useContext(SetupContext);
  return (
    <FlexContainer>
      <MetaHeading mb={10} textAlign="center">
        Player Type
      </MetaHeading>
      <MetaButton onClick={onNextPress} mt={10}>
        {nextButtonLabel}
      </MetaButton>
    </FlexContainer>
  );
};