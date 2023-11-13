type Merge<T, K> = Omit<K, keyof T> & T;
type PartialPick<T, Key extends keyof T> = Partial<T> & Pick<T, Key>;
