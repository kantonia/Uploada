function convert(){
    let returntext = ''
    try{
        let text = document.getElementById('te').value
        let dat = (JSON.parse(text))
        if(!dat.Memo){
            dat.Memo = {}
        }
        dat.Memo.memo = dat.userMemo
        if(!dat.CategoryStyler){
            dat.CategoryStyler = {}
        }
        dat.CategoryStyler.color = dat.categoryColor
        if(!dat.UserColor){
            dat.UserColor = {}
        }
        dat.UserColor.color = dat.userColor
        if(!dat.Mute){
            dat.Mute = {}
        }
        dat.Mute.user = dat.blockUser
        dat.Mute.keyword = dat.blockKeyword
        dat.Mute.emoticon = dat.blockEmoticon
        dat.Mute.category = dat.muteCategory
        if(!dat.MyImage){
            dat.MyImage = {}
        }
        dat.MyImage.imgList = dat.myImages
        if(!dat.MyImage){
            dat.MyImage = {}
        }
        dat.MyImage.imgList = dat.myImages
        if(!dat.TemporarySave){
            dat.TemporarySave = {}
        }
        dat.TemporarySave.tempArticleList = dat.tempArticles
        if(!dat.ThemeCustomizer){
            dat.ThemeCustomizer = {}
        }
        dat.ThemeCustomizer.theme = dat.themePreset
        returntext = JSON.stringify(dat)
        alert('변환됨')
    }
    catch{
        returntext = 'Error'
    }
    document.getElementById('te').value = returntext
}