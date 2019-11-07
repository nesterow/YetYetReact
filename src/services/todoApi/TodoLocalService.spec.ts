const NAME = "TodoLocalService (localStorage)"

import TodoDB, {KEY} from './TodoLocalService'


it(`${NAME}: has crud methods`, async () => {

    // create
    await TodoDB.create("Hello World")
    expect(localStorage.getItem(KEY)).toContain("Hello World")

    // find
    const entries: any[] = await TodoDB.find({})
    expect(entries).toBeInstanceOf(Array)
    expect(entries.length).toEqual(1)

    // update
    const {id} = entries[0]
    await TodoDB.update({id, title: 'Hello Test'})
    expect(localStorage.getItem(KEY)).toContain("Hello Test")

    // delete
    await TodoDB.delete(id)
    const empty: any[] = await TodoDB.find({})
    expect(empty.length).toEqual(0)

})