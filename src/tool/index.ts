// 全屏
export function full() {
    var docElm = document.documentElement
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
        // @ts-ignore
    } else if (docElm.msRequestFullscreen) {
        // @ts-ignore
        docElm.msRequestFullscreen()
        // @ts-ignore
    } else if (docElm.mozRequestFullScreen) {
        // @ts-ignore
        docElm.mozRequestFullScreen()
        // @ts-ignore
    } else if (docElm.webkitRequestFullScreen) {
        // @ts-ignore
        docElm.webkitRequestFullScreen()
    }
}

// 判断是否为全屏
export function isFullScreen() {
    return !!(
        document.fullscreen ||
        // @ts-ignore
        document.mozFullScreen ||
        // @ts-ignore                    
        document.webkitIsFullScreen ||
        // @ts-ignore    
        document.webkitFullScreen ||
        // @ts-ignore
        document.msFullScreen
    );
}