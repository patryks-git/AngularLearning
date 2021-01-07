export interface ObjectListState<T> {
    list: Array<T>;
    loading: boolean;
    error: Error;
}