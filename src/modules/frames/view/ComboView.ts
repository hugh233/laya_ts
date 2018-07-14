class ComboView extends ui.battle.ComboViewUI
{
    constructor()
    {
        super()
    }

    public setComboCount(count:number)
    {
        this.mpImgCount.skin = "battle/Nub_Answer_1_" + count + ".png"
    }
}