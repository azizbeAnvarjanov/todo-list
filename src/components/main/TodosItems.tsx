import React, { FC } from 'react'

// components
import EditBtns from './EditBtns'

// todo type
import { Todo } from '../models/Todo';

// icons
import { CiCalendarDate } from 'react-icons/ci'
import useStore from '../../store/useStore';



// props
type TodoItemsProps = {
  setOpenEditForm: (value: boolean) => void;
  todoLists: Todo[];
  deleteTodo: (value: number) => void;
  getId: (value: number) => void;
  toggleComplete: (value: number) => void;
}



const TodosItems: FC<TodoItemsProps> = (
    { 
      setOpenEditForm, 
      todoLists, 
      deleteTodo, 
      getId, 
      toggleComplete 
    }
  ) => {

    const filtering = useStore((state) => state.filtering);

  const filterindTodos = todoLists.filter((todo) => {
    if (filtering === "complited") {
      return todo.isComplited === true;
    } else if (filtering === "uncomplited") {
      return todo.isComplited === false;
    }else{
      return todo;
    }
  })

  return (
    <div
      className={`items mt-7 grid grid-cols-2 gap-y-12 gap-x-4`}
    >
      {
        filterindTodos.length === 0 ? <p>Not tasks</p> :
        filterindTodos.map((todo) => (
            <div key={todo.id} className="task bg-white rounded-md p-5 relative">
              <div className="this_directory absolute bg-lime-500 bottom-[100%] right-5 py-1 px-5 rounded-t-md text-white">
                {todo.directory}
              </div>
              <div>
                <h1 className="mb-3 font-medium">{todo.title}</h1>
                <p>{todo.description}</p>
              </div>
              <div className="date mt-4 border-t-2 border-dashed border-[--border]">
                <div className="flex items-center my-3">
                  <CiCalendarDate size={25} className="mr-3" />
                  <span>{todo.date}</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span
                    onClick={()=> toggleComplete(todo.id)}
                      className={`py-2 px-4 cursor-pointer rounded-full bg-amber-200 ${todo.isComplited && "bg-green-500"}`}
                    >
                      {todo.isComplited ? "Complited" : "Uncomplited"}
                    </span>
                  </div>
                  <div className="flex">
                    <EditBtns setOpenEditForm={setOpenEditForm} deleteTodo={deleteTodo} id={todo.id} getId={getId} />
                  </div>
                </div>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default TodosItems