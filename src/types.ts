export type InferActionsType<T> = T extends {
  [key: string]: (...arg: any[]) => infer U;
}
  ? U
  : never;

export type Card = {
  number: number;
};
