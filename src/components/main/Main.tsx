import { FormEvent, FC } from 'react'

//components
import FormatBtns from './FormatBtns'
import TodosItems from './TodosItems'
import AddTaskForm from '../forms/AddTaskForm'
import AddDirectoryForm from '../forms/AddDirectoryForm'
import EditTodoForm from '../forms/EditTodoForm'

// todo object shablon
import { Todo } from '../models/Todo'
import useStore from '../../store/useStore'


// props
type MainProps = {
  todoLists: Todo[];
  addTodo: (value: Todo) => void;
  deleteTodo: (value: number) => void;
  editingItem: Todo;
  setEditingItem: (value: Todo) => void;
  getId: (value: number) => void;
  upDateTodo: (e: FormEvent, id: number) => void;
  toggleComplete: (id: number) => void;
}



const Main: FC<MainProps> = (
  {
    todoLists,
    addTodo,
    deleteTodo,
    editingItem,
    setEditingItem,
    getId,
    upDateTodo,
    toggleComplete
  }
) => {


  const {
    openEditForm,
    setOpenEditForm,
    openAddForm,
    setOpenAddForm,
    setOpenDirectoryForm,
    openDirectoryForm,
  } = useStore()


  return (
    <div>
      <FormatBtns />
      <TodosItems
        setOpenEditForm={setOpenEditForm}
        todoLists={todoLists}
        deleteTodo={deleteTodo}
        getId={getId}
        toggleComplete={toggleComplete}
      />
      <AddTaskForm
        openAddForm={openAddForm}
        setOpenAddForm={setOpenAddForm}
        addTodo={addTodo}
      />
      <AddDirectoryForm
        setOpenDirectoryForm={setOpenDirectoryForm}
        openDirectoryForm={openDirectoryForm}
      />
      <EditTodoForm
        openEditForm={openEditForm}
        setOpenEditForm={setOpenEditForm}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
        upDateTodo={upDateTodo}
      />
    </div>
  )
}

export default Main