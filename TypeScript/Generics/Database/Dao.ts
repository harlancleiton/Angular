import { IDao } from "./IDao";

export class Dao<T> implements IDao<T> {
    //region Variables
    table: string = ""
    //endregion Variables

    //region Methods
    insert(object: T): boolean {
        console.log("Insert")
        return true
    }
    update(object: T): boolean {
        console.log("Update")
        return true
    }
    delete(id: number): boolean {
        console.log("Delete")
        return true
    }
    select(id: number): boolean {
        console.log("Select")
        return true
    }
    selectAll(): [T] {
        console.log("Insert")
        return null
    }
    //endregion Methods
}