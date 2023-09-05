import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import Textarea from '../ui/Textarea';
import CardModel from '../../model/CardModel';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import tailwindcssStyles from '../../assets/styles';
import { ViewWithModel } from '../../types/view';

const CardView: FC<ViewWithModel<CardModel>> = (props) => {
    const { model } = props;
    const { id, description, variant, lang, makeClass, setEdit, removeFromParent } = model;
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
            <Button
                className={makeClass(['editButton'])}
                variant={variant}
                callback={cardEdit}
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
