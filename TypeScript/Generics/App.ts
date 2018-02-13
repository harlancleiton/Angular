import { Dao } from './Database/Dao'
import { PessoaModel } from './Model/PessoaModel'

let pessoaModel: PessoaModel = new PessoaModel("Harlan", "harlancleiton@gmail.com")
let dao: Dao<PessoaModel> = new Dao<PessoaModel>()
dao.insert(pessoaModel)
dao.delete(1)
dao.update(pessoaModel)
dao.select(1)