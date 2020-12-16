import TodoList from './todo-list';
import SearchPanel from './search-panel';
import AppHeader from './app-header';

const App = () => {

    const isLogin = false;
    const loginBox = <span>Log in please</span>;

    const todoData = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'Make awesome app', important: true, id: 2 },
        { label: 'Learn React', important: false, id: 3 }
    ];

    return (
        <div>
            {isLogin ? null : loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

export default App;