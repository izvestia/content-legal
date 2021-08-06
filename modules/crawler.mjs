import Axios from 'axios';

export default class {

    constructor
    (
        option_parameter = {}
    )
    {

        const option_item = typeof option_parameter === 'object'
            ? option_parameter
            : JSON.parse(`${option_parameter}`);
        ;

    }

    static getURLItem
    (
        value_parameter = ''
    )
    {

        value_parameter = `${value_parameter}`;

        const result_item = Axios(
            {
                method: 'get',
                responseType: 'text',
                url: value_parameter
          });

          return result_item;

    }

}