class AccountView extends ui.battle.AccountViewUI
{
    constructor()
    {
        super()
    }

    public setResult(score: number)
    {
        if(score > 0)
        {
            this.mpTextResult.text = "You Win!"
        }else
        {
            this.mpTextResult.text = "Draw!"
        }
        this.mpNumScore.text = score + ""
    }

}