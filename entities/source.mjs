import get from 'get-value';
import set from 'set-value';

export default class {

    #producer_item_ = '';
    #title_item_ = '';
    #url_item_ = '';

    constructor
    (
        option_parameter
    )
    {

        const option_item = typeof option_parameter === 'object'
            ? option_parameter
            : JSON.parse(`${option_parameter}`);
        ;

        this.#producer_item_ = get(option_item, 'producer', this.#producer_item_);
        this.#title_item_ = get(option_item, 'title', this.#title_item_);
        this.#url_item_ = get(option_item, 'url', this.#url_item_);

    }

    get producer()
    {

        return this.#producer_item_;

    }

    get title()
    {

        return this.#title_item_;

    }

    get url()
    {

        return this.#url_item_;

    }

}