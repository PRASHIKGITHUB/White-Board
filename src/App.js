import Board from './components/Board'
import ToolBar from './components/ToolBar'
import BoardProvider from './store/BoardProvider';
import ToolboxProvider from './store/TooboxProvider';
import ToolBox from './components/ToolBox';
const App = () => {

  return (

    <BoardProvider>
      <ToolboxProvider>
        <ToolBar />
        <Board />
        <ToolBox/>
      </ToolboxProvider>
    </BoardProvider>

  );
};

export default App;