import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import Textarea from '../ui/Textarea';
import CardModel from '../../model/CardModel';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import tailwindcssStyles from '../../assets/styles';
import { ViewExtendeble } from '../../types/view';
import { DragDropProps } from '../../types/common';

const CardView: FC<ViewExtendeble<CardModel, Partial<DragDropProps>>> = (props) => {
  const { model, handleDragging, handleUpdateList } = props;
  const {
    id,
    description,
    draggable,
    variant,
    lang,
    parent,
    makeClass,
    setEdit,
    removeFromParent,
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
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', id)
    handleDragging?.(true);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    parent && handleUpdateList?.(e.dataTransfer.getData('text'), parent);
    handleDragging?.(false);
  }

const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()
  
  const handleDragEnd = () => handleDragging?.(false)

  return (
    <Paper
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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
