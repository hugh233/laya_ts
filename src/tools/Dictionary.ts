class Dictionary
{
    private _dic: {[key: string]: any} = {}
    constructor()
    {

    }

    public add(key: string, value: any)
    {
        this._dic[key] = value
    }

    public get(key: string)
    {
        if(this.isContains(key))
        {
            return this._dic[key]
        }else
        {
            return null
        }
    }

    public isContains(key: string)
    {
        if(this._dic[key] != null)
        {
            return true
        }else
        {
            return false
        }
    }

    public remove(key: string)
    {
        if(this.isContains(key))
        {
            delete this._dic[key]
        }
    }
}