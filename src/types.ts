type Task = {
  task: string;
  hints: string[];
}

type Theme = {
  id: string;
  title: string;
  example: {
    task: string;
    solution: any[];
    answer: string;
  };
  tasks: Task[];
};

export type MethodType = {
  id: string;
  title: string;
  themes: Theme[];
};

export type MethodItemType = Omit<MethodType, 'themes'>;