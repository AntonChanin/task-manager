import { action, makeObservable, observable } from 'mobx';

class TaskManagerStore {
  constructor() {
    makeObservable(this, {});
  };
};

export default new TaskManagerStore();
