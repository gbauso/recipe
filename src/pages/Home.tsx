import ActionBar from '@/components/action-bar/ActionBar.component';
import RecipeList from '@/components/recipe-list/RecipeList.component';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <RecipeList />
      <ActionBar />
    </Wrapper>
  );
};

export default Home;
