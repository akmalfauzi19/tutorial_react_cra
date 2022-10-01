import { useState } from "react";

const root = document.querySelector("#root");


function App() {
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');

    function getId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();
        // console.log(activity);

        if (!activity) {
            return setMessage('Field Masih kosong!');
        }

        if (edit.id) {

            const updatedTodo = {
                ...edit,
                activity,

            };

            const editTodoIndex = todos.findIndex(function (todo) {
                return todo.id == edit.id;
            });
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo;


            setTodos(updatedTodos);
            setMessage('');
            return cancleEditHandler();
        }


        setTodos([...todos, {
            id: getId(),
            activity: activity,
            done: false
        }]);
        setActivity('');
        setMessage('');
    }

    function removeTodoHandler(todoId) {
        const filterTodo = todos.filter(function (todo) {
            return todo.id !== todoId;
        });

        // console.log(filterTodo);
        setTodos(filterTodo);
        if (edit.id)
            cancleEditHandler();
    }

    function editTodoHandler(todo) {
        // console.log(todo.activity);
        setActivity(todo.activity);
        setEdit(todo);
    }

    function cancleEditHandler() {
        setEdit({});
        setActivity('');
    }

    function doneTodoHandler(todo) {
        // console.log(todo);
        const updateTodo = {
            ...todo,
            done: todo.done ? false : true
        };

        const checkBoxIndex = todos.findIndex(function (cureentTodo) {
            return cureentTodo.id == todo.id;
        });

        const updateCheckTodo = [...todos];
        updateCheckTodo[checkBoxIndex] = updateTodo;

        // console.log(updateCheckTodo);
        return setTodos(updateCheckTodo);
    }

    return (
        <>
            <h2>Todo List</h2>
            <div style={{ color: "red" }}>{message}</div>
            <form onSubmit={saveTodoHandler}>
                <input type="text" placeholder="isi kegiatan" value={activity} onChange={function (event) {
                    setActivity(event.target.value);
                }} />

                <button type="submit">{edit.id ? 'Simpan Perubahan' : 'Tambah'}</button>
                {edit.id && <button onClick={cancleEditHandler}>Batal Edit</button>}
            </form>
            {!todos.length > 0 ? (<p>Data Masih Kosong</p>) :
                (<ul>
                    {todos.map(function (todo) {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" onChange={doneTodoHandler.bind(this, todo)}
                                    checked={todo.done}
                                />
                                {todo.activity}
                                ({todo.done ? 'Selesai' : 'belum selesai'})
                                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                            </li>

                        );
                    })}
                </ul>)
            }

        </>
    );
}
// ReactDOM.render(<App />, root);

export default App;
