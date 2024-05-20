import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import CategoryManager from './components/CategoryManager';
import './App.css'

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div>
      <h1>Productivity</h1>
      {!activeCategory && <h3>Set category:</h3>}
      {!activeCategory && <CategoryManager/>}
      {activeCategory && <h3>Set task:</h3>}
      {activeCategory && <TaskList categoryId={activeCategory} />}
      <CategorySelector selectedCategoryId={activeCategory} setSelectedCategoryId={setActiveCategory} />
    </div>
  )
}
