import ActionBar from '@/components/action-bar/ActionBar.component';
import RecipeList from '@/components/recipe-list/RecipeList.component';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <RecipeList />
      <ActionBar />
    </>
  );
};

export default Home;
