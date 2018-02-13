export interface IDao<T> {
    //region Variables
    table: string
    //endregion Variables

    //region Methods
    insert(object: T): boolean
    update(object: T): boolean
    delete(id: number): boolean
    select(id: number): boolean
    select(id: number): boolean
    selectAll(): [T]
    //endregion Methods
}