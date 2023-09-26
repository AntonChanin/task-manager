import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import Title from '../ui/Title';
import Textarea from '../ui/Textarea';
import CardModel from '../../model/CardModel';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import tailwindcssStyles from '../../assets/styles';
import { ViewExtendeble } from '../../types/view';
import Row from '../ui/Row';

const CardView: FC<ViewExtendeble<CardModel, { status?: string[], priority?: string[] }>> = (props) => {
    const { model,
        priority = [
            'very low', 'low', 'medium', 'high', 'hot'
        ],
        status = [
        'queue', 'development', 'done'
        ],
    } = props;
    const {
        id,
        description,
        variant = 'thirdy',
        status: statusM,
        statusName,
        priority: priorityM,
        lang,
        makeClass,
        setEdit,
        removeFromParent,
        date: { create },
    } = model;
    const { removeCardId } = InstanceTaskManagerStore;
    const [isEdit, setIsEdit] = useState(model.isEdit);

    const cardEdit = () =>  {
        if (model.description.trimEnd()) {
            setIsEdit(!isEdit);
            setEdit(isEdit);
        } else {
            removeFromParent();
            removeCardId(id)
        };
    };

    const updateDescriptionCallback: <T>(props: Record<string, T>) => void =
        (props) => {
            const { value } = props;
            model.description = `${value}`.trim();
        };        

    return (
        <Paper>
            <Row>
                <Title value={`#${InstanceTaskManagerStore.cardIds.findIndex((v) => v === id) + 1}`} />
                <Title className="mr-8 text-xs opacity-0 h-[1rem] hover:opacity-50 flex" value={id} />
            </Row>
            <Button className={makeClass(['tag', `priority-${priorityM}`])} value={priority[priorityM]} />
            <Button className={makeClass(['tag'])}  value={statusName ?? status[statusM]} />
            <Button className={makeClass(['tag'])}  value={`${Math.round((new Date().getMilliseconds() - create.getMilliseconds()) / (1000 * 60 * 60 * 60))}d`} />
            <Button
                className={makeClass(['editButton'])}
                variant={variant}
                callback={cardEdit}
                role="button"
            >
                <img
                    width={24}
                    height={24}
                    src={tailwindcssStyles['icons']['edit']['src']}
                    alt={tailwindcssStyles['icons']['edit']['author']}
                />
            </Button>
            {!isEdit
                ? (
                    <Article value={description} />
                ) : (
                    <Textarea
                        value={description}
                        variant="thirdy"
                        placeholder={localization[lang].editCardPlaceholder}
                        callback={updateDescriptionCallback}
                    />
                )
            }
        </Paper>
    );
};

export default observer(CardView);
