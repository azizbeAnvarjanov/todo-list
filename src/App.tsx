import { useState, FC, FormEvent } from 'react'

// components
import Sidebar from './components/sidebar/Sidebar'
import Aside from './components/aside/Aside'
import MainHeader from './components/main/MainHeader'
import Main from './components/main/Main'

// todo type
import { Todo } from './components/models/Todo'

// toasty components
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalStorage } from './components/models/useLocalStorage'
import useStore from './store/useStore'






const App: FC = () => {

  // toasty function
  const notify = (text: string) => toast.success(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  // all use states
  // const [openEditForm, setOpenEditForm] = useState(false);
  // const [openAddForm, setOpenAddForm] = useState(false);
  // const [openDirectoryForm, setOpenDirectoryForm] = useState(false);
  // const [editTodoId, setEditTodoId] = useState(0);
  // const [filtering, setFiltering] = useState("all");

  const { 
    setOpenForm, 
    setEditTodoId,
  } = useStore();


  // todoLists main data
  const [todoLists, setTodoLists] = useState(useLocalStorage("todoLists"));

  // update=ing localstorage data
  const updateLocalStorage = (arr: Todo[]) => {
    localStorage.setItem("todoLists", JSON.stringify(arr));
  }

  // add todo function
  const addTodo = (newTodo: Todo) => {
    const newTodoLists = [newTodo, ...todoLists];
    setTodoLists(newTodoLists);
    updateLocalStorage(newTodoLists);
    notify("Muvafaqiyatli qo'shildi !");
  }

  // delete todo function
  const deleteTodo = (id: number) => {
    const copy = [...todoLists];
    const newTodoLists = copy.filter(f => f.id !== id);
    setTodoLists(newTodoLists);
    updateLocalStorage(newTodoLists);
    notify("Muvafaqiyatli ochirildi !");
  }


  const [editingItem, setEditingItem] = useState({
    id: 0,
    title: "",
    description: "",
    date: "",
    directory: "",
    isComplited: false,
    saved: false,
  });



  //  get editing todo id function
  const getId = (id: number) => {
    const currentTodo = todoLists.find((t: Todo) => t.id === id);
    setEditTodoId(id);
    setEditingItem(currentTodo);
  }

  // update crrent todo
  const upDateTodo = (e: FormEvent, id: number) => {
    e.preventDefault();
    const copy = [...todoLists];
    const currentItem = copy.find((f) => f.id === id);
    currentItem.title = editingItem.title;
    currentItem.date = editingItem.date;
    currentItem.description = editingItem.description;
    currentItem.directory = editingItem.directory;

    setTodoLists(copy);
    updateLocalStorage(copy);
    setOpenForm("");
    notify("Muvafaqiyatli o'zgartirildi !");
  }



  // complited or uncompliteding function
  const toggleComplete = (id: number) => {
    const copy = [...todoLists];
    const currentItem = copy.find((f) => f.id === id);
    currentItem.isComplited = !currentItem.isComplited;
    if (currentItem.isComplited === false) {
      notify("Uncomplited this todo");
    }
    if (currentItem.isComplited === true) {
      notify("Complited this todo");
    }

    setTodoLists(copy);
    updateLocalStorage(copy);
  }





  return (
    <div className='flex'>
      <Sidebar
      />
      <div className='w-[60%] p-10 mx-auto main '>
        <MainHeader />
        <Main
          todoLists={todoLists}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          getId={getId}
          upDateTodo={upDateTodo}
          toggleComplete={toggleComplete}
        />

      </div>
      <Aside />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
