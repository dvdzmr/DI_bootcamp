import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, editCategory, deleteCategory } from '../store/categorySlice';
import { selectCategories } from '../store/selectors';

const CategoryManager = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');
  const [idOrder, setidOrder] = useState(3);
  const [categoryIdBeingEdited, setCategoryIdBeingEdited] = useState(null);

  // Add and Delete
  const handleAddCategory = () => {
    if (newCategoryName) {
      const newCategory = { id: idOrder, name: newCategoryName };
      setidOrder(idOrder + 1);
      dispatch(addCategory(newCategory));
      setNewCategoryName('');
    }
  };
  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
    dispatch(deleteCategory(id));
  };

  // Edits
  const handleEditCategory = (id, name) => {
    setCategoryIdBeingEdited(id);
    setEditCategoryName(name);
  };

  const handleSaveEdit = (id) => {
    dispatch(editCategory({ id, newCategory: { id, name: editCategoryName } }));
    setCategoryIdBeingEdited(null);
    setEditCategoryName('');
  };

  

  return (
    <>
      <input 
        type="text" 
        value={newCategoryName} 
        onChange={e => setNewCategoryName(e.target.value)} 
        placeholder="New task category" 
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {categoryIdBeingEdited === category.id ? (
              <div>
                <input 
                  type="text" 
                  value={editCategoryName} 
                  onChange={e => setEditCategoryName(e.target.value)} 
                  placeholder="Edit category" 
                />
                <button onClick={() => handleSaveEdit(category.id)}>Save</button>
                <button onClick={() => setCategoryIdBeingEdited(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {category.name}
                <div>
                  <button onClick={() => handleEditCategory(category.id, category.name)}>Edit</button>
                  <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryManager;