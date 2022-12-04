export interface IBlog {
    datetime: string;
    title: string;
    tags: string[];
}

export interface IExercise {
    name: string;
    duration: string;
    calories: string;
}

export interface IDiary {
    date: string;
    time: string;
    text: string;
}

export interface IHistory {
    datetime: string;
}
