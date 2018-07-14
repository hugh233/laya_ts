class RoundBroadcastView extends ui.battle.RoundBroadcastViewUI
{
    constructor()
    {
        super()
    }

    public setType(type: string)
    {
        this.mpTextType.text = type
    }

    public setRound(roundId: number)
    {
        this.mpTextTitle.text = "第"+roundId+"题"
        this.mpImgBgScore.visible = roundId == 5
    }
}