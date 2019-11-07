const NAME = 'TodoPagination'

import React from 'react'
import ReactDOM, {render} from 'react-dom'
import TodoPagination from './TodoPagination'


it(`${NAME}: renders without crashing`, () => {
    const dom = document.createElement('div');
    render(<TodoPagination limit={10} offset={0} total={100}/>, dom)
    ReactDOM.unmountComponentAtNode(dom);
});