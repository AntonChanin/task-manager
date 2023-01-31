type ViewWithModel<T> = {
    model: T;
}

type ViewExtendeble<T, P> = ViewWithModel<T> & P;

export type { ViewWithModel, ViewExtendeble };
