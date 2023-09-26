import BoardView from '../components/view/BoardView';
import { BoardPageProps } from '../types/page';

function BoardPage({ model }: BoardPageProps) {
    return (<BoardView model={model} />);
};

export default BoardPage;