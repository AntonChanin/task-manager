import localization from '../assets/localization';
import Button from '../components/ui/Button';
import Paper from '../components/ui/Paper';
import Row from '../components/ui/Row';
import Column from '../components/ui/Column';
import Title from '../components/ui/Title';
import uuid from '../utils/uuid';
import { MainPageProps } from '../types/page';

function MainPage({ model, callback }: MainPageProps) {
    const { makeClass, lang, items: boards } = model;
    const headers = ['name', 'create', 'exicute'];
    return (
        <Paper
            variant="secondary"
            className={makeClass(['paper'])}
        >
            <Title className={makeClass(['title'])} value={localization[lang].selectBoard} />
            <Paper>
                <Column>
                    <Row>
                        {headers.map((title) => (<Title key={uuid()} className={makeClass(['column'])} value={title} />))}
                    </Row>
                    {boards.map((board) => {
                        const { name, date } = board;
                        const { create, exicute } = date;
                        const columns = [
                            name,
                            create ? `${create.toDateString()}` : '___',
                            exicute ? `${exicute.toDateString()}` : '___'
                        ];
                        return (
                            <Button variant="thirdy" key={uuid()} callback={() => callback?.({ board })}>
                                <Row>
                                    {columns.map((col) => (<span key={uuid()} className={makeClass(['column'])}>{col}</span>))}
                                </Row>
                            </Button>
                        );
                    })}
                </Column>
                
            </Paper>
           
        </Paper>
    );
}

export default MainPage;